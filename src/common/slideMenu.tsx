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
    Portfolio: "/portifolio",
    "Contact Us": "/contact",
    Settings: "/setting",
  };

  return (
    <Box onClick={() => setOpen(!open)} className="fh">
      <Drawer
        open={open}
        variant="temporary"
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "transparent",
            margin: "auto",
            backdropFilter: "blur(10px)",
            top:0,
            bottom:0,
            right:0,
            right:0
          },
          "& .MuiDrawer-root": {
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Paper
          className="fh "
          sx={{
            width: "100%",
            padding: "20% 16px 0",
            bgcolor: "transparent",
            
          }}
        >
          <Toolbar />
          <Stack className="" spacing={1}>
            <RecursiveMenu item={items} setSlide={setOpen} />
          </Stack>
        </Paper>
      </Drawer>
    </Box>
  );
};

export default SlideMenu;

/**
 *
 */
