import { Dispatch, SetStateAction, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import react, { useEffect } from "react";

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

interface NavbarProps {
  setSlideOpen: Dispatch<SetStateAction<boolean>>;
  setViews: () => void;
}

const Navbar = ({ setSlideOpen, setViews }: NavbarProps) => {
  return (
    <AppBar
      position="sticky"
      className="center-items"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "secondary.main",
        height: "9%",
        color: "secondary.contrastText",
      }}
    >
      <Toolbar
        className="red center-items p-rel"
        sx={{
          flexFlow: "column",
          justifyContent: "space-between",
          height: "fit-content !important",
          padding: "8px",
        }}
      >
        <Bottombar setSlideOpen={setSlideOpen} setViews={setViews} />
      </Toolbar>
    </AppBar>
  );
};

const Bottombar = ({ setSlideOpen, setViews }: NavbarProps) => {
  const [click, setClick] = useState("");
  const [menu, setMenu] = useState(false);

  useEffect(() => {});

  const navItem = [
    { name: "Home", icon: <Home />, click: () => setViews(null) },
    {
      name: "menu",
      icon: <Menu sx={{ transform: "scale(1)" }} />,
      click: () => {
        setMenu(true);
        setSlideOpen(true);
      },
    },
    {
      name: "forward arrow",
      icon: <ArrowForward sx={{ transform: "scale(1)" }} />,
      click: () => {
        setMenu(false);
        setSlideOpen(false);
      },
    },
    {
      name: "call",
      icon: <Call sx={{ transform: "scale(1)" }} />,
      click: () => setViews("about"),
    },
    {
      name: "galley",
      icon: <Photo sx={{ transform: "scale(1)" }} />,
      click: () => setViews("gallery"),
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
      <Box className="" onClick={() => setViews("home")}>
        <IconButton
          className=""
          sx={{
            padding: "0",
            "&.MuiIconButton-root": {
              display: "flex",
              //fontSize: "8px",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              color: "text.primary",
            }}
          >
            Red
          </Typography>
          <Typography
            sx={{
              fontWeight: "bolder",
              color: "text.secondary",
            }}
          >
            Apple
          </Typography>
        </IconButton>
      </Box>

      {navItem.slice(-2).map((icon, i) => (
        <Box kry={icon.name} className="">
          <IconButton
            key={icon.name}
            onClick={() => setClick(icon.name)}
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
            className="debug"
            onClick={navItem[2].click}
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
            onClick={navItem[1].click}
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

export default Navbar;

/**
 *  <Box
        className="debug red "
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

  useEffect(() => {}, []);

  return (
    <Stack className="" direction={"row"}>
      <Box
        className="debug"
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
