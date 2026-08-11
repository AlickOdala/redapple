import { Box, Stack, Typography, Grid, Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import RedAppleName from "../lui/redapplename";
import {
  HeadText,
  TextContext,
  ContactItem,
  BackgroundImage,
  FfpNavList,
} from "../lui/lixmaterial";
import { Call, Email, Facebook, WhatsApp, Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import ContactPage from "./contact";
import Footer from "./footer";

const variant = {
  container: {
    size: { xs: 12 },
    width: "100%",
    p: 1,
  },
  leftAside: {
    size: { xs: 12, sm: 2 },
    height: {
      xs: "auto",
      sm: "90vh",
      borderRight: "0.5px solid",
    },
  },
  main: {
    size: { xs: 12, sm: 10 },
    height: { xs: "88%", sm: "90vh" },
    padding: "8px 0 !important",
    gap: 4,
    display: "flex",
    flexFlow: "column",
  },
  midBox: {
    height: { xs: "auto", sm: "80%" },
    margin: "auto !important",
    flexGrow: 1,
    width: "100%",
    p: 1,
  },
};

const AboutPage = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { welcome, goals, coreValues, contact, customerFeedback, faq } = data;
  const views = [<ContactPage data={data} />];

  return (
    <Dialog open={isOpen} fullScreen>
      <Grid
        container
        className="vh p-rel center-items "
        spacing={1}
        sx={variant.container}
      >
        <Grid
          container
          className=""
          size={variant.container.size}
          //sx={{ height: "auto" }}
          column={2}
        >
          <Box className="grow" sx={{ padding: "10px 0  !important" }}>
            <RedAppleName fs={18} />
          </Box>{" "}
          <Box className=" grow right center-items">
            <Close onClick={() => setIsOpen(!isOpen)} />
          </Box>
        </Grid>
        <Grid
          className="p-rel "
          size={variant.leftAside.size}
          sx={variant.leftAside}
        ></Grid>
        <Grid
          className=" scroll p-rel"
          size={variant.main.size}
          spacing={1}
          sx={variant.main}
        >
          <Box
            className=""
            sx={{ display: "flex", flexFlow: "column", gap: 1 }}
          >
            <Box className="" sx={{ p: 1 }}>
              <Typography
                sx={{
                  margin: "0 !important",
                  lineHeight: 1,
                  fontWeight: 600,
                }}
              >
                About!
              </Typography>
              <RedAppleName fs={30} />
            </Box>
            <Box className=" left" sx={{ p: 2 }}>
              <TextContext
                fs={12}
                text={welcome}
                // sx={{ width: { sm: "80%" } }}
              />
            </Box>
          </Box>
          <Stack
            className="center-items"
            sx={{ width: "100%", gap: 2, height: { xs: "60vh", sm: "50vh" } }}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Box className="p-rel center-items" sx={variant.midBox}>
              <Display head="Our Goal!" text={goals} />
            </Box>
            <Box className="p-rel center-items" sx={variant.midBox}>
              <Display count head="Golden Value" text={coreValues} />
            </Box>
          </Stack>
          {views}
        </Grid>
      </Grid>
    </Dialog>
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
    <Box
      className=" fh p-rel center-self"
      sx={{
        aspectRatio: { sm: 4 / 3.5 },
        width: "100% !important",
        //bgcolor: "background.default",
        borderRadius: "8px",
        boxShadow: "0 0 4px #1212123c",
        padding: "16px 8px !important",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box className="" sx={{ padding: "16px 0 !important" }}>
        <HeadText center fs={16} text={head} />
      </Box>
      <Box className=" p-rel center-items center-self">
        <Typography
          className="center-items"
          sx={{
            margin: "auto !important",
            height: "100% !important",
            fontSize: { xs: "11px", sm: "12px" },
            flexGrow: 1,
            textAlign: "center",
            p: { sm: 4 },
            lineHeight: 1,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
/**
 *
 *
      <Box className="debug center-self grow">
        
      </Box>
 */
