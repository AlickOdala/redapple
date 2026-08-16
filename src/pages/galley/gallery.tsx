import { Close, DataExploration } from "@mui/icons-material";
import {
  Box,
  Grid,
  ImageList,
  Stack,
  Dialog,
  Card,
  ImageListItem,
} from "@mui/material";

import React, { useEffect, useState, useRef } from "react";
import {
  TextIcon,
  HeadText,
  DataSelector,
  LuiImage,
  Loading,
  ActionButton,
} from "../../common/lui/lixmaterial";
import { useTheme, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import RedAppleName from "../../common/lui/redapplename";
import { useNavigate, useOutletContext } from "react-router-dom";
import ReactPlayer from "react-player";
import RandomPick from "../../../scripts/randomPick";
import FilterEngine from "../../../scripts/filterengine";

interface MediaItem {
  id: number | string;
  name: string;
  src: string;
  ext: string;
}
interface CategoryData {
  services: Record<string, MediaItem[]>;
}
interface RawAssets {
  Photography: CategoryData;
  Videography: CategoryData;
  Designs: CategoryData;
  [key: string]: CategoryData;
}

interface FlatGallery {
  [category_service: string]: MediaItem[];
}

interface GalleryContainerProps {
  images: MediaItem[];
  services: string[];
}

const Gallery = () => {
  const rawAssets = useOutletContext<RawAssets>() || {};
  const assets = rawAssets.services || {};
  const [isOpen, setIsOpen] = useState(true);
  const [services, setServices] = useState<string[]>(["Service Categories"]);
  const [gallery, setGallery] = useState<FlatGallery>({}); //del
  const [inView, setInView] = useState<FlatGallery>({});
  const [toFilter, setToFilter] = useState("Service Categories");
  const navigate = useNavigate();
  const theme = useTheme();
  const dataRef = useRef<any>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    navigate("/");
  };

  useEffect(() => {
    if (assets && Object.keys(assets).length > 0) {
      const flattened: FlatGallery = {};
      const serviceToItem: string[] = []; //del
      const filterService: string[] = [];

      Object.entries(assets).forEach(([category, catData]) => {
        Object.entries(catData).forEach(([serviceName, items]) => {
          const key = serviceName;
          const cKey = category;
          filterService.push(key);
          if (toFilter === "Service Categories") {
            serviceToItem.push(cKey);
            flattened[cKey] = items;
          } else if (key === toFilter) {
            serviceToItem.push(key);
            flattened[key] = items;
            setInView({});
          }
        });
        dataRef.current = flattened;
      });
      if (dataRef.current) {
        setInView(dataRef.current);
        console.log("catching in data ref", dataRef.current);
      }

      setServices(["Service Categories", ...filterService]);
      setInView({});
      setInView(flattened);
    }
  }, [toFilter, assets]);

  return (
    <Dialog open={isOpen} fullScreen onClose={() => setIsOpen(!isOpen)}>
      <Grid
        container
        className="vh center-items "
        spacing={1}
        sx={{ width: "100%", p: 2 }}
      >
        {/* header */}
        <Grid
          container
          className=""
          size={{ xs: 12 }}
          sx={{ height: "auto" }}
          column={2}
        >
          <Box className="grow " sx={{}}>
            <RedAppleName fs={18} />
          </Box>{" "}
          <Box className=" grow right center-items">
            <Close onClick={handleClick} />
          </Box>
        </Grid>
        {/* body */}
        <Grid
          className="p-rel "
          size={{ xs: 12, sm: 2 }}
          sx={{
            height: { xs: "auto", sm: "90vh", borderRight: "0.5px solid" },
          }}
        >
          <Stack className="fh" sx={{ pr: 1 }}>
            <Box
              className="gebug center-items "
              sx={{
                alignIte: "center",
                position: "sticky !important",
                top: "0px",
                zIndex: 10,
                display: { sm: "none" },
              }}
            >
              <DataSelector toFilter={services} bolder filtered={setToFilter} />
            </Box>
            <Box
              className="center-self center-items grow"
              sx={{
                display: { xs: "none", sm: "flex" },
                flexFlow: "column",
                gap: 1,
              }}
            >
              <Box className="">
                <HeadText text="Filter By:" center fs={14} />
              </Box>

              {services.map((service, i) => (
                <Box className="">
                  <ActionButton
                    text={service}
                    bgcolor="transparent"
                    onClick={() => {
                      setToFilter(!service ? "Service Categories" : service);
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Box
              className=" center-self p-rel"
              sx={{
                padding: "20% 0 !important",
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                gap: 1,
              }}
            ></Box>
          </Stack>
        </Grid>
        <Grid
          className=" scroll"
          size={{ xs: 12, sm: 10 }}
          spacing={1}
          sx={{
            height: { xs: "88%", sm: "92vh" },
            gap: 4,
            display: "flex",
            flexFlow: "column",
            p: 1,
          }}
        >
          {Object.keys(inView).length === 0 ? (
            <HeadText fs={14} center text="No items found" />
          ) : (
            Object.entries(inView).map(([service, data], i) => (
              <GalleryContainer key={service} service={service} images={data} />
            ))
          )}
        </Grid>
      </Grid>
    </Dialog>
  );
}; 

const GalleryContainer = ({ images, service, key }: GalleryContainerProps) => {
  const [imageToView, setImageToView] = useState<string[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const theme: Theme = useTheme();
  const [loaded, setLoaded] = useState({});

  //Media Queries
  const xs = useMediaQuery(theme.breakpoints.only("xs"), { noSsr: true });
  const sm = useMediaQuery(theme.breakpoints.only("sm"), { noSsr: true });
  const cols = xs ? 2 : sm ? 3 : 4;

  useEffect(() => {
    setImageToView(RandomPick(images, 10));
  }, [images]);

  const handlePlay = (uid: string) => {
    setPlayingId((prev) => (prev === uid ? null : uid));
  };

  return (
    <Box
      className=""
      sx={{
        borderRadius: "16px !important",
        padding: "8px",
        boxShadow: 3,
      }}
    >
      <Box className="" sx={{ padding: "0 0 4px" }}>
        <HeadText fs={18} center text={service} />
      </Box>
      <ImageList
        variant="masonry"
        className=""
        gap={8}
        cols={cols}
        sx={{
          height: "auto !important",
          padding: "4px 0 0",
        }}
      >
        {imageToView.map((item: string, i: number) => {
          if (item.ext === "webp") {
            return (
              <LuiImage
                src={item}
                i={i}
                key={i}
                srcset={imageToView}
                cover={false}
              />
            );
          } else if (item.ext === "mp4") {
            return (
              <ImageListItem
                key={i}
                className=""
                sx={{ marginBottom: "8px !important" }}
              >
                <Card
                  className=""
                  sx={{
                    bgcolor: "#1f1f1f",
                    marginBottom: "8px",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    className="center-items"
                    sx={{
                      position: "relative",
                      marginBottom: "8px",
                      objectFit: "fill",
                      objectPosition: "center",
                    }}
                  >
                    <ReactPlayer
                      key={i}
                      src={item.src}
                      width="100%"
                      height="100%"
                      style={{ top: "0", left: "0" }}
                      playing={playingId === item.id}
                      controls={playingId === item.id}
                      alt={`${service}-${item.name}`}
                      muted
                      loop
                      playsinline
                      //light={{item.poster || true}}
                      onClick={() => handlePlay(item.id)}
                      onReady={() => {
                        //setLoaded((s) => ({ ...s, [item.id]: true }))
                      }}
                      config={{
                        file: { attributes: { preload: "metadata" } },
                        youtube: {
                          playerVars: {
                            modestbranding: 1,
                            rel: 0,
                            showinfo: 0,
                            controls: 0,
                            fs: 1,
                          },
                        },
                      }}
                    />
                  </Box>
                </Card>
              </ImageListItem>
            );
          }
        })}
        {Array.from({ length: 10 % 4 === 0 ? 0 : 4 - (10 % 4) }).map((_, i) => (
          <Box key={`empty-${i}`} />
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;
