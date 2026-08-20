import { Box, Typography } from "@mui/material";
import React from "react";
import {
  LuiHeadText,
  LuiText,
  LuiCard,
  LuiButton,
  LuiCardMedia,
  LuiImage,
  Section,
  LuiCollapse,
  LuiBulleteText,
  LuiMediaSlide,
} from "../lui/material";

import Services from "./services";
import ContactPage from "../../pages/contact/contact";
import RFQs from "./rfqs";
import Footer from "./footer";
import { useOutletContext } from "react-router-dom";
import Portifolio from "../../pages/portifolio/portifolio";
import Gallery from "../../pages/galley/gallery";



const Settings = () => {
  const data = useOutletContext();
  return (
    <Box sx={{ pt: 8 }}>
      
    </Box>
  );
};

export default Settings;
