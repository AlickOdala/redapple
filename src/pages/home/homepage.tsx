import React, { lazy, Suspense } from "react";
import { Box, Paper } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import {
  Loading,
  BgWrapper,
  BackgroundImage,
} from "../../common/lui/lixmaterial";

const WelcomePage = lazy(() => import("./welcome"));
const MissionPage = lazy(() => import("./mission"));
const ServicesPage = lazy(() => import("../../common/sections/services"));
const ContactPage = lazy(() => import("../contact/contact"));
const StoryPage = lazy(() => import("../story/stories"));

const Homepage = (): JSX.Element => {
  const data = useOutletContext();

  if (!data) {
    return <Loading />;
  }

  try {
    return (
      <BackgroundImage image="logo/logo.webp" filter={"blur(50px) grayscale(0) contrast(1.2) opacity(0.2)"} >
        <Box sx={{ minHeight: "100% !important" }}>
          <Suspense fallback={<Loading />}>
            <WelcomePage data={data} />
            <MissionPage data={data} />
            <ServicesPage data={data} />
            <ContactPage data={data} tile/>
            <StoryPage data={data} />
          </Suspense>
        </Box>
      </BackgroundImage>
    );
  } catch (e: unknown) {
    console.error(e);
    return (
      <Paper
        sx={{ margin: "50% 20%  !important" }}
        className="self-center p-abs text"
      >
        Something Went wrong:{(e as Error).message}
      </Paper>
    );
  }
};

export default Homepage;
//
//
//
//
//
