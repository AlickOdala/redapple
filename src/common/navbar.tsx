import { Dispatch, SetStateAction } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Stack,
  Typography,
  Paper,
} from "@mui/material";

import react, { useEffect, useState } from "react";

import {
  Photo,
  Home,
  Menu,
  Person,
  MoreVert,
  Call,
  ArrowForward,
} from "@mui/icons-material";

import { BrowseGallery } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import RedAppleName from "./lui/redapplename";
import { HideOnScroll } from "./lui/lixmaterial";
import { Image } from "mui-image";
import logo from "../assets/webuse/logo/";

interface NavbarProps {
  setSlideOpen: Dispatch<SetStateAction<boolean>>;
  scrollTarget: any;
  isSlide: boolean;
}

const variant = {
  appbar: {
    zIndex: (theme) => theme.zIndex.drawer + 1,
    bgcolor: "background.default",
    color: "secondary.contrastText",
    boxShadow: "none !important",
    backdropFilter: "blur(5px) grayscale(50)",
    // display:'none'
  },
  toolbar: {
    flexFlow: "column",
    justifyContent: "space-between",
    height: "fit-content !important",
    px: 2,
  },
};
const Navbar = ({ setSlideOpen, scrollTarget, isSlide }: NavbarProps) => {
  const navigate = useNavigate();
  try {
    return (
      <HideOnScroll target={scrollTarget}>
        <AppBar position="fixed" className="" sx={variant.appbar}>
          <Toolbar
            className="redp-rel p-rel center-items "
            sx={variant.toolbar}
          >
            <Stack
              className=" fh p-rel"
              sx={{ width: "100%", height: "8vh !important", py: 1 }}
              spacing={1}
              direction={"row"}
            >
              <Box className=" grow" sx={{ display: "flex" }}>
                <RedAppleName fs={18} logo />
              </Box>
              <Box className=" grow center-items">
                <Box className="right">
                  <IconButton
                    className="center-self"
                    onClick={() => {
                      setSlideOpen(!isSlide);
                    }}
                  >
                    {!isSlide ? (
                      <Menu
                        sx={{
                          transform: "scale(1)",
                          margin: "auto margin:'auto !important",
                        }}
                      />
                    ) : (
                      <ArrowForward
                        sx={{
                          transform: "scale(1)",
                          margin: "auto !important",
                        }}
                      />
                    )}
                  </IconButton>
                </Box>
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    );
  } catch (e: unknown) {
    console.error(e);
    return (
      <Paper
        sx={{ margin: "50% 20%  !important" }}
        className="self-center p-abs text"
      >
        {" "}
        Something Went wrong:{(e as Error).message}
      </Paper>
    );
  }
};

export default Navbar;

/**
 * const Bottombar = ({ setSlideOpen }: NavbarProps) => {
  const [click, setClick] = useState("");
  const [menu, setMenu] = useState(false);

  const navItem = [
    { name: "Home", icon: <Home />, link: "/" },
    {
      name: "menu",
      icon: <Menu sx={{ transform: "scale(1)" }} />,
      link: () => setSlideOpen(true),
    },
    {
      name: "forward arrow",
      icon: <ArrowForward sx={{ transform: "scale(1)" }} />,
    },
    {
      name: "call",
      icon: <Call sx={{ transform: "scale(1)" }} />,
      link: "/contact",
    },
    {
      name: "galley",
      icon: <Photo sx={{ transform: "scale(1)" }} />,
      link: "/gallery",
    },
  ];

  return (
    <Stack
      className="p-rel"
      spacing={1}
      direction={"row"}
      sx={{
        height: "100%",
        width: "100%",
        padding: "16px 0 0",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box className="">
        <RedAppleName />
      </Box>

      {navItem.slice(-2).map((icon, i) => (
        <Box component={NavLink} kry={icon.name} to={icon.link} className="">
          <IconButton
            key={icon.name}
            onClick={() => {
              setClick(icon.name);
              setSlideOpen(icon.link);
            }}
            sx={{
              padding: "0",
              "&.MuiIconButton-root": {
                display: "flex",
                flexDirection: "column",
                fontSize: "8px",
                width: "30px",
              },
            }}
          >
            {icon.icon}
            {click === icon.name && icon.name}
          </IconButton>
        </Box>
      ))}

      <Box className="grow right">
        {menu ? (
          <IconButton
            className=""
            sx={{
              padding: "0",
              "&.MuiIconButton-root": {
                fontSize: "8px",
                width: "fit-content",
              },
            }}
          >
            {navItem[2].icon}
          </IconButton>
        ) : (
          <IconButton
            className=""
            sx={{
              padding: "0",
              "&.MuiIconButton-root": {
                fontSize: "8px",
                width: "fit-content",
              },
            }}
          >
            {navItem[1].icon}
          </IconButton>
        )}
      </Box>
    </Stack>
  );
};
 *  <Box
        className=" red "
        sx={{
          padding: "auto !important",
          alignItems: "center",
          display: { sm: "none" },
        }}
        onClick={navItem[0].click}
      >
        <IconButton sx={{ padding: "0" }}>{navItem[0].icon}</IconButton>
      </Box>

      <Box
        className=" red "
        sx={{
          padding: "auto !important",
          alignItems: "center",
        }}
        onClick={navItem[1].click}
      >
        <IconButton sx={{ padding: "0" }}>{navItem[1].icon}</IconButton>
      </Box>
     


      const Topbar = ({ setViews }: NavbarProps) => {
  const [click, setClick] = useState(false);

  const list = [
    { name: "Theme", link: () => setViews("theme") },
    { name: "Profile", link: () => setViews("profile") },
    { name: "Setting", link: () => setViews("Settings") },
    { name: "Test", link: () => setViews("test") },
  ];

  const hundleClick = (link: () => void) => {
    link();
    setClick(false);
  };



  return (
    <Stack className="" direction={"row"}>
      <Box
        className=""
        sx={{
          alignContent: "center",
          padding: "0 !important",
        }}
      >
        <IconButton sx={{}}>
          <img
            //src={logo}
            style={{
              transform: "scale(1.4)",
              height: "10px",
            }}
          />
        </IconButton>
      </Box>
      <Box
        className=" red grow right spot-container"
        sx={{ right: "0", height: "100%", padding: "0 !important" }}
      >
        <MoreVert onClick={() => setClick(true)} />
        {click && (
          <Box
            className="p-abs"
            sx={{
              height: "150px",
              top: "50%",
              width: "100px",
              bgcolor: "background.paper",
              boxShadow: "2px 2px 20px black",
              zIndex: 100,
              boxSizing: "border-box",
              justifyContent: "center",
              padding: "5px",
            }}
          >
            <Stack className="fh" spacing={1}>
              {list.map((itm) => (
                <Typography
                  key={itm}
                  className=""
                  onClick={() => hundleClick(itm.link)}
                  sx={{
                    fontSize: "10px",
                    textAlign: "left !important",
                    fontWeight: "bold",
                    color: "text.secondary",
                  }}
                >
                  {itm.name}
                </Typography>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </Stack>
  );
};
 */
