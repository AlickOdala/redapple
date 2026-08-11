import React, { useState, useEffect } from "react";
import { Box, Drawer, Paper, Toolbar, Stack, Container } from "@mui/material";
import { HeadText, RecursiveMenu } from "./lui/lixmaterial";

interface Props {
  open: boolean;
  data: any;
  setOpen: () => void;
}

const SlideMenu = ({ open, data, setOpen }: Props) => {
  const assets = data ?? "";
  const items = {
    Home: "/",
    "About Us": "/about",
    Gallery: "/gallery",
    "Contact Us": "/contact",
    "Send Feedback": "/feedback",
    "Book Now": "/booking",
    Settings: "/setting",
    FQs: "/fqs",
  };

  return (
    <Box onClick={() => setOpen(!open)} className="fh">
      <Drawer
        open={open}
        variant="temporary"
        anchor="right"
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Paper
          className="fh "
          sx={{
            width: "230px",
            padding: "20% 16px 0",
          }}
        >
          <Toolbar />
          <Stack className="" spacing={1}>
            <RecursiveMenu item={items} setSlide={setOpen} />
          </Stack>
        </Paper>
      </Drawer>

      <Container
        className="p-rel  center-items"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          height: "100%",
          zIndex: 1000,
        }}
        disableGutters
      >
        <Paper
          className=" fh"
          sx={{
            //width:"100%",
            padding: "20% 16px 0",
            display: { xs: "none", md: "block" },
            minHeight: "100%",
            bgcolor: "transparent",
          }}
        >
          <Toolbar />
          <Box className="" sx={{ p: 1, bgcolor: "primary.main" }}>
            <HeadText text="Menu" color="primary.contrastText" />
          </Box>
          <Stack className="" spacing={1}>
            <RecursiveMenu item={items} setSlide={setOpen} />
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default SlideMenu;

/**
 *
 */
