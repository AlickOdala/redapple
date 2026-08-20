import React, { useState, useEffect } from "react";
import { Box, Drawer, Paper, Toolbar, Stack, Container } from "@mui/material";
import { HeadText, RecursiveMenu } from "./lui/lixmaterial";
import { LuiButton } from "./lui/material";
import { useNavigate } from "react-router-dom";

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
    "Contact Us": "/contact",
    Portfolio: "/portifolio",
  };
  const navigate = useNavigate();
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
            top: 0,
            bottom: 0,
            right: 0,
            width: "100%",
          },
        }}
      >
        <Toolbar />
        <Stack className="center-items grow" spacing={1}>
          {Object.entries(items).map(([name, link]) => (
            <Box className="fv" key={name} sx={{ py: 0.5 }}>
              <LuiButton
                text={name}
                center
                txtcolor="white"
                bgcolor="transparent"
                onClick={() => {
                  navigate(link);
                  setOpen(!open);
                }}
              />
            </Box>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
};

export default SlideMenu;

/**
 *<RecursiveMenu item={items} setSlide={setOpen} />
 */
