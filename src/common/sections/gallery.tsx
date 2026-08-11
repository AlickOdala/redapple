import {
  Close,
  ExpandLess,
  ExpandMore,
  Filter,
  Photo,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  Grid,
  ImageList,
  ImageListItem,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  ListItemText,
  IconButton,
  Stack,
  Dialog,
  Skeleton,
  Card,
  CardMedia,
} from "@mui/material";
import Image from "mui-image";
import React, { useEffect, useState } from "react";
import { TextIcon, HeadText, DataSelector } from "../lui/lixmaterial";
import { useTheme, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import RedAppleName from "../lui/redapplename";
 

const menus = [
  "Wedding",
  "Graduation",
  "Birthday",
  "Portraits",
  "Corporate",
  "Products",
  "Real Estate",
  "Studio Photography",
];

const links = {};
const Gallery = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = data.services ?? "services";

  const { photography, videography, edit_and_Design } = services;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    photography.map((m) => console.log("m", m));
  });
  
  return (
    <Dialog open={true} fullScreen>
      <Grid
        container
        className="vh p-rel   center-items"
        spacing={1}
        sx={{ width: "100%", p: 1 }}
      >
        <Grid
          container
          className=""
          size={{ xs: 12 }}
          sx={{ height: "auto" }}
          column={2}
        >
          <Box className="grow" sx={{ padding: "10px 0  !important" }}>
            <RedAppleName fs={18} />
          </Box>{" "}
          <Box className=" grow right center-items">
            <Close onClick={handleClick} />
          </Box>
        </Grid>
        <Grid
          className="p-rel "
          size={{ xs: 12, sm: 2 }}
          sx={{
            height: { xs: "auto", sm: "90vh", borderRight: "0.5px solid" },
          }}
        >
          <Stack className=" fh">
            <Box
              className="gebug center-items"
              sx={{
                alignIte: "center",
                position: "sticky !important",
                top: "0px",
                zIndex: 10,
                //bgcolor: "background.default",
                //padding: "10px 0  !important",
              }}
            >
              <DataSelector toFilter={menus} bolder />
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
          className=" scroll p-rel"
          size={{ xs: 12, sm: 10 }}
          spacing={1}
          sx={{
            height: { xs: "88%", sm: "92vh" },
            padding: "8px 16px !important",
            gap: 4,
            display: "flex",
            flexFlow: "column",
          }}
        ></Grid>
      </Grid>
    </Dialog>
  );
};

/**
 *  <ImageContainer id={"photography"} />
          <VideoContainer videos={""} id={"videos"} />
          <ImageContainer id={"Edit and Design"} />
 */

const Button = ({ text, id }: { text: string; id: string }) => {
  const handleNavigate = () => {
    if (text.toLowerCase() === id.toLowerCase()) {
      window.location = id;
      console.log("id", id);
    }
  };
  return (
    <TextIcon
      text={text}
      onClick={() => handleNavigate}
      className="center-self"
      rootProp={{
        borderRadius: "50px !important",
        border: "1px solid",
        width: "fit-content",
        height: "30px",
      }}
      textProp={{
        fontSize: "11px",
        textAlign: "center",
        fontWeight: "bolder",
        width: "100%",
      }}
    />
    /**
     * {links.map((link) => (
        <Box
          key={link.id}
          component={"a"}
          href={link.id}
          className="debug p-rel"
          target="_self"
          sx={{
            height: "fit-content",
            minWidth: "90px",
            maxWidth: "fit-content",
            margin: "3px !important",
            outline: "unset !important",
            textDecoration: "none",
            borderRadius: "50px",
            color: "text.primary",
          }}
        >
          <TextIcon
            text={link.text}
            onClick={handleView}
            bgcolor={"transparent"}
            height={{ xs: "22px", sm: "32px" }}
          />
        </Box>
      ))}
     */
  );
};
const ImageContainer = ({ images, id }: { images?: any; id?: string }) => {
  const [load, setLoad] = useState(false);

  const theme: Theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.only("xs"), {
    noSsr: true,
  });
  const sm = useMediaQuery(theme.breakpoints.only("sm"), {
    noSsr: true,
  });

  const cols = xs ? 2 : sm ? 3 : 3;
  return (
    <Box
      className=""
      id={id}
      sx={{
        borderRadius: "16px !important",
        padding: "8px",
        boxShadow: "0 0 4px #1212127b",
      }}
    >
      <Box className="" sx={{ padding: "0 0 4px" }}>
        <HeadText fs={18} center text={id.toUpperCase()} />
      </Box>
      <ImageList
        variant="masonry"
        className=""
        gap={8}
        cols={cols}
        //rowHeight={200}
        sx={{
          height: "auto !important",
          padding: "4px 0 0",
        }}
      >
        {(images ?? "").slice(0, 9).map((img) => (
          <ImageListItem key={img.id} className="">
            <Image
              showLoading={true}
              //height="100%"
              //width="100%"
              showGallery
              bgcolor={"#121212"}
              src={img.src}
              //alt={image.name}
              loading="eager"
              decoding="async"
              fit="cover"
              onLoad={() => setLoad(true)}
              sx={{ marginBottom: "8px !important", borderRadius: "4px " }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const VideoContainer = ({ videos, id }: { videos?: string; id?: string }) => {
  const [playing, setPlaying] = React.useState(true);
  const ref = React.useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  const theme: Theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.only("xs"), {
    noSsr: true,
  });
  const sm = useMediaQuery(theme.breakpoints.only("sm"), {
    noSsr: true,
  });
  const Photography = "Photograpgt";

  const cols = xs ? 2 : sm ? 3 : 3;

  return (
    <Box
      className=""
      id={id}
      sx={{
        borderRadius: "16px !important",
        padding: "8px",
        boxShadow: "0 0 4px #1212127b",
      }}
    >
      <Box className="" sx={{ padding: "0 0 4px" }}>
        <HeadText fs={18} center text={"Videography".toUpperCase()} />
      </Box>
      <ImageList
        variant="masonry"
        className=""
        gap={8}
        cols={cols}
        //rowHeight={200}
        sx={{
          height: "auto !important",
          padding: "4px 0 0",
        }}
      >
        {["3/5", "16/9", "1/1", "12/6", "3/4", "3/4", "1/1", "9/16", "3/4"].map(
          (item, i) => (
            <ImageListItem key={""} className="">
              <Card>
                <CardMedia
                  ref={ref}
                  component={"video"}
                  src="/1.mp4"
                  poster=""
                  preload="metadata"
                  autoPlay={false}
                  loop
                  muted
                  playsInline
                  onClick={() => {
                    if (playing) ref.current?.pause();
                    else ref.current?.play();
                    setPlaying(!playing);
                  }}
                  sx={{
                    aspectRatio: item,
                    background: "#000000",
                    marginBottom: "8px !important",
                    borderRadius: "4px ",
                    zindex: 10,
                  }}
                />
              </Card>
            </ImageListItem>
          ),
        )}
      </ImageList>
    </Box>
  );
};

export default Gallery;
