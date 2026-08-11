import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Viewer from "../galley/viewer";
import { Image } from "mui-image";
import sharp from "sharp";
import {
  HeadText,
  LandingPage,
  LuiImage,
  TextContext,
} from "../../common/lui/lixmaterial";
import { motion } from "framer-motion";

const StoryPage = ({ data }: { data: any }) => {
  const assets = data.stories ?? "";
  const message = assets[0].message;
  const heading = assets[1].heading;

  const images = [
    { name: "charity", src: "story_photos/charity/charity.webp" },
    { name: "cooperate", src: "story_photos/cooperate/cooperate.webp" },
    //{ name: "immigration", src: "story_photos/immigration/immigration.webp" },
    { name: "graduation", src: "story_photos/graduation/graduation.webp" },
    { name: "studio", src: "story_photos/studio/studio.webp" },
    { name: "sports", src: "story_photos/sports/sports.webp" },
    { name: "wedding", src: "story_photos/wedding/wedding.webp" },
    { name: "wanderers", src: "story_photos/wanderers/wanderers.webp" },
    // { name: "fam", src: "story_photos/fam/fam.webp" },
    { name: "documentary", src: "story_photos/documentary/documentary.webp" },
  ];

  const hundleName = (name: any) => {
    const activity = heading.filter((item, i) => {
      const active = item.toLowerCase();
      const toFilter = name.toLowerCase();
      const filtered = active.includes(toFilter);
      return filtered;
    });
    return activity;
  };

  return (
    <Box
      className="fh"
      sx={{
        display: "flex",
        flexFlow: "column",
        gap: 4,
        color: "text.secondary",
        px: 2,
        py: 4,
      }}
    >
      <LandingPage>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            flexFlow: "column",
            gap: 3,
            boxShadow: 3,
            px: 1,
            py: 2,
            borderRadius: "8px",
          }}
        >
          <Box className="">
            <HeadText text={"Our Stories"} center fs={20} />
          </Box>
          <TextContext text={message} center />
        </Box>
      </LandingPage>

      <Stack className="" sx={{}}>
        {images.map((image, i) => (
          <LandingPage>
            <Card
              key={i}
              className=" p-rel"
              sx={{
                height: "auto",
                p: 1,
                marginBottom: "32px !important",
                boxShadow: 3,
              }}
            >
              <LuiImage
                src={image}
                srcset={images}
                i={i}
                ratio={1 / 1}
                cover={true}
              />

              <CardContent
                className=" grow"
                sx={{
                  height: "auto",
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  p: 1,
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>
                  {hundleName(image.name)}
                </Typography>
              </CardContent>
            </Card>
          </LandingPage>
        ))}
      </Stack>
    </Box>
  );
};

export default StoryPage;

/**
 * <Box
                className=" p-rel"
                sx={{
                  aspectRatio: 1 / 1,
                  objectFit: "fill",
                  objectPosition: "top",
                  width: "100% !important",
                  display: "flex",
                }}
              >
                <Image
                  showLoading
                  easing="linear"
                  showGallery
                  loading="lazy"
                  sx={{
                    width: "100% !important",
                    position: "absolute !important",
                    bgcolor: "grey.50 !important",
                  }}
                  src={image.src}
                  icon={"logo/logo.webp"}
                />
 */
