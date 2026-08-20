import {
  ArrowBack,
  Close,
  DataExploration,
  DesignServices,
  Home,
  PhotoCamera,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  ImageList,
  Stack,
  Dialog,
  Card,
  ImageListItem,
  IconButton,
  Toolbar,
  Collapse,
} from "@mui/material";

import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  LuiCollapse,
  LuiGalleryViewer,
  LuiHeadText,
  LuiNavigation,
  LuiText,
} from "../../common/lui/material";
import { Image } from "mui-image";

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
  const [gallery, setGallery] = useState("");

  const data = useOutletContext();
  const images = data.services ?? "";
  const categories = Object.keys(images);
  const [category, setCategory] = useState(categories[0]);
  const [open, setOpen] = useState(null);

  const hundleToggle = (key: string) => {
    setOpen(open === key ? key : null);
  };

  const handleImages = () => {
    const imageset = Object.entries(data.services);
    const category = "photography".toLowerCase();

    const imageIn = imageset.map(([cat, serv]) => {
      if (cat.toLowerCase() === category) return Object.entries(serv);
    });
    console.log(imageIn.filter(Boolean));
    return imageIn.filter(Boolean);
  };
  useEffect(() => {
    const images = handleImages();
    setGallery(images);
  }, []);

  return (
    <Box sx={{ pt: 2, minHeight: "100%" }}>
      <Box sx={{ px: 2, py: 1, position: "sticky", top: 60, zIndex: 10 }}>
        <Box
          className="center-items p-rel"
          sx={{
            height: 50,
            borderRadius: "50px",
            border: "0.5px solid white",
            boxShadow: 3,
            boxSizing: "border-box",
            p: 1,
            backdropFilter: "blur(10px)",
          }}
        >
          <Stack direction="row" sx={{ gap: 0.5, py: 1 }}>
            <LuiNavigation action="back" link="/"/>
            {categories.map((cat) => (
              <IconButton onClick={() => setCategory(cat)}>
                <LuiHeadText text={cat} fx={12} />
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Box>

      <LuiHeadText text={category} center />
      {Object.entries(images).map(([categories, services]) => {
        if (categories.toLowerCase() === category.toLowerCase()) {
          return (
            <Box className="" sx={{ px: 2 }}>
              {Object.entries(services).map(([service, images], i) => (
                <Box className="" sx={{}}>
                  <LuiCollapse
                    key={`${i}_${service}`}
                    container
                    services={service}
                  >
                    <LuiGalleryViewer srcset={images} />
                  </LuiCollapse>
                </Box>
              ))}
            </Box>
          );
        }
      })}
      <Box sx={{ px: 2, py: 1 }}>
        <LuiText
          text={`The ${category} of heigh quality and delivered in time.`}
          center
          fx={14}
        />
      </Box>
    </Box>
  );
};
//

export default Gallery;

/**
 *<Box className="debug" sx={{ px: 2, pb: 2 }}>
                    <Box
                      sx={{
                        borderTop: "0.4px solid",
                        borderBottom: "0.4px solid",
                      }}
                    >
                      <LuiHeadText text={service} fx={14} center />
                    </Box>
                  </Box>

                  <Collapse in={service === service}>
                    
                  </Collapse>
 */
