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
    { name: "charity", url: "story_photos/charity/charity.webp" },
    { name: "cooperate", url: "story_photos/cooperate/cooperate.webp" },
    //{ name: "immigration", url: "story_photos/immigration/immigration.webp" },
    { name: "graduation", url: "story_photos/graduation/graduation.webp" },
    { name: "studio", url: "story_photos/studio/studio.webp" },
    { name: "sports", url: "story_photos/sports/sports.webp" },
    { name: "wedding", url: "story_photos/wedding/wedding.webp" },
    { name: "wanderers", url: "story_photos/wanderers/wanderers.webp" },
    // { name: "fam", url: "story_photos/fam/fam.webp" },
    { name: "documentary", url: "story_photos/documentary/documentary.webp" },
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
    <Section text="Portifolio" >
      <LuiHeadText text={head} center />
      <LuiText text={subhead} center />
<<<<<<< HEAD
      {images.map((imag, i) => (
=======
      {images.slice(0,3).map((imag, i) => (
>>>>>>> 100dea926bded145b1d29343deb4d9796f7f0245
        <LuiCardMedia src={imag} details />
      ))}
      <Box className="center-items right">
        <LuiButton
          onClick={() => navigate("/portifolio")}
          text="View Portifolio"
          bgcolor="transparent"
          txtcolor="#121212"
        />
      </Box>
    </Section>
  );
};

export default StoryPage;
