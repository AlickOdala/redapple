import {
  Box,
  Stack,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  ImageList,
  ImageListItem,
  Grid,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Image } from "mui-image";
import { Camera, Photo } from "@mui/icons-material";
import { HeadText, TextIcon } from "./lui/lixmaterial";
import { setInterval } from "timers/promises";
import { motion, AnimatePresence } from "framer-motion";

const Viewer = ({ image, services, category, heading }: { image?: any; services?: any; category:string; heading?:string }) => {
  const [index, setIndex] = useState(0);

  const posters = Object.values(image[category]);

  const variant = {
    boxTop: {
      height: { sm: "100%" },
      aspectRatio: { xs: 3 / 4 },
    },
    boxBottom: {
      position: {
        xs: "relative !important",
        sm: "absolute !important",
        bottom: 0,
      },
      backgroundImage: {
        sm: "linear-gradient(to top, #121212, #1212121e, transparent)",
      },
      backdropFilter: "blur(3px) !important",
      color: { sm: "secondary.main", xs: "secondary.contrastText" },
      "&:hover": {
        filter: { sm: "opacity(0)" },
        backdropFilter: "blur(0px) !important",
      },
      p: 1,
    },
    actionButton: {
      height: "auto",
      position: { sm: "absolute !important" },
      bottom: 10,
    },
  };

  useEffect(() => {
    console.log("poster", posters);
    console.log("services", services);
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % 5);
    }, 10000);
    timeout;
    return () => clearTimeout(timeout);
  });

  return (
    <Grid
      container
      className=" fh p-rel center-self"
      spacing={2}
      direction={{ sm: "row" }}
      sx={{ width: "100%", padding: "8px !important" }}
    >
      <Grid className="" sx={{}}>
        <HeadText fs={20} text={heading} />
      </Grid>
      <Grid
        className=" p-rel center-self"
        sx={variant.boxTop}
        size={{ xs: 12 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={posters[index]}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
          >
            <Box
              className="p-rel"
              sx={{
                objectFit: "fill",
                objectPosition: "top",
                width: "100%",
                display: "flex",
                aspectRatio: { xs: 3 / 4, sm: 1 / 2 },
              }}
            >
              <Image
                src={posters[index]}
                showLoading={false}
                duration={0}
                easing="linear"
                showGallery
                shift={null}
                sx={{
                  width: "100% !important",
                  position: "absolute !important",
                  bgcolor: "grey.50 !important",
                }}
              />
            </Box>
          </motion.div>
        </AnimatePresence>
      </Grid>
      <Grid
        className=" center-items  p-rel center-self"
        sx={variant.boxBottom}
        size={{ xs: 12 }}
      >
        <Box className="p-rel" sx={{}}>
          {" "}
          <Box className="" sx={{ height: "10%", padding: "8px 0 0" }}>
            <HeadText fs={18} text={"Services"} center />
          </Box>
          <Box
            className="center-self"
            sx={{
              display: { sm: "flex" },
              height: 100,
              flexFlow: "column",
              flexWrap: "wrap",
              width: "70% !important",
              gap: { sm: 1 },
            }}
          >
            {services.slice(0).map((item) => (
              <Typography
                className=""
                sx={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid
        className="p-rel  center-items right"
        sx={variant.actionButton}
        size={{ xs: 12 }}
      >
        <Box
          className="right"
          sx={{
            padding: "0 34px !important",
            color: { xs: "secondary.contrastText", sm: "secondary.main" },
          }}
        >
          <TextIcon
            text={"view all"}
            className={"center-items"}
            rootProp={{
              height: "25px",
              border: "1px solid !important",
              borderRadius: "50px !important",
              backdropFilter: "blur(2px)",
            }}
            textProp={{
              fontSize: "12px",
              fontWeight: "bolder",
              color: { sm: "secondary.main" },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Viewer;

/**
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 


 *  <Stack
        className="p-rel"
        sx={{
          height: "75vh",
          borderRadius: "24px",
          boxShadow: "0px 0px 10px #1212123f",
        }}
        //spacing={1}
      >
        <Box className="" sx={{ display: { sm: "none" } }}>
          <IconButton
            sx={{
              fontWeight: "bolder",
              fontSize: "16px",
              color: "text.primary",
            }}
          >
            <Camera />
            Photography
          </IconButton>
        </Box>
        <Stack
          className=" p-rel"
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          sx={{ display: "flex", gap: "10px", flexDirection: "column" }}
        >
         
          <Box
            className="center-items center-self p-rel"
            sx={{
              width: { xs: "70%", sm: "50%" },
              aspectRatio: { xs: 3 / 3, sm: 3 / 4 },
              borderRadius: "24px",
              color: "secondary.contrastText",
            }}
          >
            <Box className="p-rel" sx={{ lineHeight: "0.5 !important" }}>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  textAlign: "center",
                  borderBottom: { xs: "0.5px solid", sm: "none" },
                  fontSize: { sm: "30px" },
                  display: { xs: "none", sm: "block" },
                  padding: "0 !important",
                }}
              >
                Photography
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  textAlign: "center",
                  borderBottom: { xs: "0.5px solid", sm: "none" },
                  fontSize: { sm: "30px" },
                }}
              >
                Services
              </Typography>
            </Box>

           
          </Box>
        </Stack>
      </Stack>
 */
