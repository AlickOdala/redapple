import { Box, Stack, Toolbar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import RedAppleName from "../../common/lui/redapplename";
import {
  HeadText,
  TextContext,
  BackgroundImage,
  LandingPage,
} from "../../common/lui/lixmaterial";
import ContactPage from "../contact/contact";
import { useNavigate, useOutletContext } from "react-router-dom";
import bgImage from "../../assets/webuse/loading/loading.webp";
const variant = {
  container: {
    width: "100%",
    px: 2,
    display: "flex",
    flexflow: "column",
    gap: 2,
  },
  leftAside: {
    size: { xs: 12, sm: 2 },
    height: "auto",
    borderRight: "0.5px solid",
  },
  main: {
    height: "auto",
    padding: "8px 0 !important",
    gap: 4,
    display: "flex",
    flexFlow: "column",
  },
  midBox: {
    height: { xs: "fit-content", sm: "80%" },
    margin: "auto !important",
    flexGrow: 1,
    width: "100%",
  },
};

const AboutPage = () => {
  const data = useOutletContext();
  const { welcome, goals, coreValues } = data;
  const views = [<ContactPage data={data} />];
  const navigate = useNavigate();
  const [expand, setExpand] = useState(199);
  const [click, setClick] = useState(false);

  const hundleExpand = () => {
    if (click === true) {
      setExpand(2000);
      setClick(!click);
    } else {
      setExpand(199);
      setClick(!click);
    }
  };

  return (
    <BackgroundImage
      image={bgImage}
      filter={"blur(5px) opacity(0.2) grayscale(0.4)"}
    >
      <Box className="p-rel center-items " spacing={1} sx={variant.container}>
        <Toolbar />
        <LandingPage>
          <Box
            className=""
            sx={{
              display: "flex",
              flexFlow: "column",
              gap: 1,
              borderRadius: "8px",
              boxShadow: 3,
              p: 2,
            }}
          >
            <Box className="">
              <HeadText text="About" />
              <RedAppleName fs={30} />
            </Box>
            <TextContext
              text={welcome.slice(0, expand)}
              center
              sx={{ h: 200 }}
            />
            <IconButton
              sx={{ fontSize: "12px", width: "fit-content" }}
              onClick={hundleExpand}
            >
              {click ? "Read All" : "Read Less"}
            </IconButton>
          </Box>
        </LandingPage>
        <Stack
          className="center-items "
          sx={{ width: "100%", gap: 2, height: { xs: "auto", sm: "50vh" } }}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <Box className=" center-items" sx={variant.midBox}>
            <Display head="Our Goal!" text={goals} />
          </Box>
          <Box className="  center-items" sx={variant.midBox}>
            <Display count head="Golden Value" text={coreValues} />
          </Box>
        </Stack>
        {views}
      </Box>
    </BackgroundImage>
  );
};

const Display = ({
  head,
  text,
  count,
}: {
  head?: string;
  text?: any;
  count?: boolean;
}) => {
  return (
    <LandingPage>
    <Box
      className=" fh p-rel center-self"
      sx={{
        aspectRatio: { sm: 4 / 3.5 },
        width: "100% !important",
        //bgcolor: "background.default",
        borderRadius: "8px",
        boxShadow: 3,
        padding: "16px 8px !important",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box className="" sx={{ padding: "16px 0 !important" }}>
        <HeadText center fs={20} text={head} />
      </Box>
      <TextContext text={text} center />
    </Box>
    </LandingPage>
  );
};

export default AboutPage;
