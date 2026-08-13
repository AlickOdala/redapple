import React, { lazy, Suspense } from "react";
import { Box, Paper } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { Loading, BgWrapper } from "../../common/lui/lixmaterial";
import { Section } from "../../common/lui/material";
import RFQs from "../../common/sections/rfqs";

const WelcomePage = lazy(() => import("./welcome"));
const MissionPage = lazy(() => import("./mission"));
const ServicesPage = lazy(() => import("../../common/sections/services"));
const ContactPage = lazy(() => import("../contact/contact"));
const StoryPage = lazy(() => import("../portifolio/portifolio"));

const Homepage = (): JSX.Element => {
  const data = useOutletContext();

  return (
    <Box sx={{ minHeight: "100% !important" }}>
      <WelcomePage data={data} />
      <StoryPage data={data} group/>
      <ServicesPage menu />
      <Section text="Contacts">
        <ContactPage disableLocation />
      </Section>
      <RFQs />
    </Box>
  );
};
export default Homepage;

//
//
//
//
//<MissionPage data={data} />
