import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Stack,
  IconButton,
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
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  ArrowBackIos,
  ArrowBackRounded,
  ArrowForwardIos,
} from "@mui/icons-material";
import ContactPage from "../contact/contact";

const Portifolio = ({ group }: { group?: boolean }) => {
  const navigate = useNavigate();
  const data = useOutletContext();
  const assets = data.stories ?? "";

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

  if (group) {
    return (
      <Section text="Portifolio">
        <>
          <LuiHeadText text={head} center />
          <LuiText text={subhead} center />

          <Box
            sx={{
              display: { sm: "flex" },
              flexFlow: { xs: "column", sm: "row" },
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {images.slice(0, 3).map((imag, i) => (
              <LuiCardMedia src={imag} details group={group} />
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
  }
  const [inPrev, setInPrev] = useState(0);

  const toggleBack = (object: any) => {
    setInPrev((prev) => (prev - 1) % object.length);
  };

  const toggleNext = (object: any) => {
    setInPrev((prev) => (prev + 1) % object.length);
  };
  return (
    <Box className="" sx={{ pt: 10, minHeight:{xs:"100vh"} }}>
      <Box className="" sx={{ py: 2 }}>
        <ArrowBackRounded onClick={() => navigate("/")} />
      </Box>
      <Box sx={{ display: "flex", flexFlow: "column", gap: 4, px: 3, py: 2 }}>
        <LuiHeadText text={head} />
        <LuiText text={subhead} />
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <LuiButton text="Contact" onClick={() => navigate("/contact")} />
          <LuiButton
            text="Gallery"
            onClick={() => navigate("/gallery")}
            bgcolor="transparent"
            txtcolor="black"
          />
        </Stack>
        <LuiHeadText text={"Our Resent Stories"} />
        <LuiText
          text={
            "We are Trusted by Big instutions , brand, companies and even solo cliants. View our vived stories."
          }
        />
      </Box>

      <LuiHeadText text={images[inPrev].story.toUpperCase()} center />
      <LuiCardMedia src={images[inPrev].url} ratio={3 / 3.4} />
      <LuiText text="text" center />

      <Stack
        className=" center-items"
        sx={{ py: 2, px: 3, gap: 4 }}
        direction="row"
      >
        <IconButton className="" onClick={() => toggleBack(images)}>
          <ArrowBackIos />
        </IconButton>
        <IconButton className="" onClick={() => toggleNext(images)}>
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Box className="" sx={{ py: 2, px: 2 }}>
        <LuiButton text="View Gallery" />
      </Box>

      <Section text={"Contact"}>
        <Box sx={{ px: 1 }}>
          <ContactPage disableLocation />
        </Box>
      </Section>
    </Box>
  );
};

export default Portifolio;
