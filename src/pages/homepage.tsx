import {
  Box,
  Grid,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import appdata from "../../appdata/_endpoint.json";
//import { Image } from "mui-image";
import ImageCard from "../common/lui/lixmaterial";
import {
  HeadText,
  TextContext,
  TextIcon,
  BackgroundImage,
} from "../common/lui/lixmaterial";
import Welcome from "../common/sections/welcome";
import { motion } from "framer-motion";

const Homepage = () => {
 

  return (
    <Box
      className=" center-items p-rel"
      sx={{ bgcolor: "grey.300", color: "secondary.main", p: 1 }}
    >
      <Welcome data={appdata}/>
      
    </Box>
  );
};

export default Homepage;

/**
 *  <Box className=" debug">
         

          
        </Box>

        
 */
