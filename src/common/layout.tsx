import React, { SetStateAction, useEffect, useState } from "react";
import { Grid, Toolbar, Container, CssBaseline, Box } from "@mui/material";
import Navbar from "./navbar";
import SlideMenu from "./slideMenu";
import { Height } from "@mui/icons-material";
import Footer from "./sections/footer";
import Gallery from "./sections/gallery";

interface LayoutProps {
  children: React.ReactNode;
  data?: any;
  setView: (target: any) => void;
}

const variant = {
  container: {
    position: "relative",
    boxSizing: "bolder-box",
    height: "100vh",
  },
  main: {
    height: "92vh",
    overFlow: "hidden !important",
    boxSizing: "bolder-box",
  },
  center: {
    height: "92vh",
  },
  aside: {
    display: {
      xs: "none",
      sm: "block",
    },
    minheight: "auto",
    position: "relative",
    boxSizing: "bolder-box",
  },
  navbar: {},
};

const Layout = ({ children, data, setView }: LayoutProps) => {
  const [slide, setSlide] = useState(false);
  const assets = data ?? "";

  useEffect(() => {

  });

  return (
    <Container className="red" disableGutters sx={variant.container}>
      <Grid className="" sx={variant.navbar}>
        <Navbar setSlideOpen={setSlide} setViews={setView} />
      </Grid>

      <Grid
        container
        className="red p-rel"
        sx={variant.main}
        direction={"row"}
        spacing={1}
      >
        <Grid
          className="red p-rel scroll"
          size={{ xs: 12, md: 9, lg: 7 }}
          sx={variant.center}
        >
          <Box className="fh"> {children}</Box>
        </Grid>

        <Grid className=" red" size={{ xs: 3, md: 3 }} sx={variant.aside}>
          <SlideMenu open={slide} />
        </Grid>
      </Grid>
      <Gallery data={assets} />
    </Container>
  );
};

export default Layout;
