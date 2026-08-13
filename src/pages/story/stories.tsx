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

import {
  LuiCardMedia,
  LuiHeadText,
  LuiText,
  Section,
  LuiButton,
} from "../../common/lui/material";
import { useNavigate } from "react-router-dom";

const StoryPage = ({ data }: { data: any }) => {
  const assets = data.stories ?? "";
  const message = assets[0].message;
  const heading = assets[1].heading;
  const navigate = useNavigate();

  const images = [
    { story: "charity", url: "story_photos/charity/charity.webp" },
    { story: "cooperate", url: "story_photos/cooperate/cooperate.webp" },
    //{ story: "immigration", url: "story_photos/immigration/immigration.webp" },
    { story: "graduation", url: "story_photos/graduation/graduation.webp" },
    { story: "studio", url: "story_photos/studio/studio.webp" },
    { story: "sports", url: "story_photos/sports/sports.webp" },
    { story: "wedding", url: "story_photos/wedding/wedding.webp" },
    { story: "wanderers", url: "story_photos/wanderers/wanderers.webp" },
    // { story: "fam", url: "story_photos/fam/fam.webp" },
    { story: "documentary", url: "story_photos/documentary/documentary.webp" },
  ];

  const info = {
    head: "Every Project Tells A Story. Every Story Creates A Memory.",
    subhead:
      "From brand campaigns to personal events, see how we transform ideas into powerful visuals. This is where creativity meets storytelling to inspire and connect.",
  };

  const { head, subhead } = info;

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
    <Section text="Portifolio">
      <>
        <LuiHeadText text={head} center />
        <LuiText text={subhead} center />
        <Box
          className="debug"
          sx={{
            display: "flex",
            flexFlow: { xs: "column", sm: "row" },
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {images.slice(0, 3).map((imag, i) => (
            <LuiCardMedia src={imag} details />
          ))}
        </Box>

        <Box className="center-items right">
          <LuiButton
            onClick={() => navigate("/portifolio")}
            text="View Portifolio"
            bgcolor="transparent"
            txtcolor="#121212"
          />
        </Box>
      </>
    </Section>
  );
};

export default StoryPage;
