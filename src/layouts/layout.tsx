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
import { LuiBgImage } from "../common/lui/material";


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
  },
  main: {
    height: "100vh",
    overFlow: "hidden !important",
    boxSizing: "bolder-box",
    backdropFilter: "blur(10px)",
  },
  center: {
    height: "100vh",
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

  return (
    <Box
      component="main"
      className="vh "
      ref={scrollContainerRef}
      sx={{
        overflowY: "auto",
        overflowx: "hidden",
        webkitOverflowScrolling: "touch",
      }}
    >
      <Navbar
        setSlideOpen={setSlide}
        isSlide={slide}
        scrollTarget={scrollContainerRef.current}
      />
      <LuiBgImage image={"logo/logo.webp"} filter={"blur(40px) opacity(0.4)"}>
        <Suspense fallback={<Loading />} ref={scrollContainerRef}>
          <Box className="" sx={{ position: "relative", minHeight: "100vh" }}>
            <Outlet context={data} />
          </Box>
          <Box className="" sx={{ position: "relative" }}>
            <Footer data={data} />
          </Box>
          <SlideMenu open={slide} data={{ data: data }} setOpen={setSlide} />
        </Suspense>
      </LuiBgImage>
    </Box>
  );
};

export default Layout;
//
//git status
