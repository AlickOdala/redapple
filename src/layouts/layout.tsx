import React, { Suspense, useState, useRef, useEffect } from "react";
import {
  Grid,
  Container,
  Box,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import SlideMenu from "../common/slideMenu";
import Footer from "../common/sections/footer";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Navbar from "../common/navbar";
import { Loading, BgWrapper } from "../common/lui/lixmaterial";
import bgImage from "../assets/webuse/loading/loading.webp";
interface LayoutProps {
  children: React.ReactNode;
  data?: any;
  setView: (target: any) => void;
}

const variant = {
  container: {
    position: "relative",
    boxSizing: "border-box",
    height: "100vh",
    overflow: "hidden",
  },
  main: {
    height: "100vh",
    overFlow: "hidden !important",
    boxSizing: "bolder-box",
    backdropFilter:'blur(10px)'
  },
  center: {
    height: "100vh",
    //scrollBehavior: "smooth",
    webkitOverflowScrolling: "touch",
    overflowY: "auto",
    width: "100%",
  },
  aside: {
    minheight: "auto",
    position: "relative",
    boxSizing: "bolder-box",
  },
  navbar: { height: "fit-Content" },
};

const Layout = () => {
  const data = useLoaderData() as any;
  const [slide, setSlide] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigation();



  try {
    return (
      <Container className="vh" disableGutters sx={variant.container}>
        <Grid className="" sx={variant.navbar}>
          <Navbar
            setSlideOpen={setSlide}
            isSlide={slide}
            scrollTarget={scrollContainerRef.current}
          />
        </Grid>

        <Grid 
          container
          className="red p-rel"
          sx={variant.main}
          direction={"row"}
          spacing={1}
        >
          <Grid
            className="red"
            size={{xs:12, sm:9, md:9.5 }}
            sx={variant.center}
            ref={scrollContainerRef}
          >
            {navigate.state === "loading" && <Loading />}
            <Suspense fallback={<Loading />}>
              <Box
                className=""
                sx={{ I Iposition: "relative", minHeight: "100vh" }}
              >
                <Outlet context={data} />
              </Box>
              <Box className="" sx={{ position: "relative" }}>
                <Footer data={data} />
              </Box>
            </Suspense>
          </Grid>

          <Grid className="red p-rel" size={{ xs: 3, sm: 2, md:2.5}} sx={variant.aside}>
            <SlideMenu open={slide} data={{ data: data }} setOpen={setSlide} />
          </Grid>
        </Grid>
      </Container>
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

export default Layout;
// 
/* 

          */
