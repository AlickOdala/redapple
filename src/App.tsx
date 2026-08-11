import { useEffect, useState } from "react";
import { RedAppleTheme } from "./_theme/theme";
import {
  Grid,
  Box,
  Container,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import Layout from "./common/layout";
import "./App.css";
import Welcome from "./common/sections/welcome";
import Mission from "./common/sections/mission";
import Gallery from "./common/sections/gallery";
import AboutPage from "./common/sections/about";
import Footer from "./common/sections/footer";
import ContactPage from "./common/sections/contact";
import assets from "../appdata/endpoint"; //cleaned data
import Services from "./common/sections/services";

type Pages = "about" | "gallery" | "home";

const App = () => {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState<Pages>("home");


  const handlePages = (target: any) => {
    setPage(target);
  };

  useState(() => {
  });

  return (
    <Container disableGutters className="vh p-rel">
      <Layout data={assets} setView={handlePages}></Layout>
    </Container>
  );
};

export default App;

/**  const sections = {
    gallery: <Gallery data={appdata} />,
    about: <AboutPage data={appdata} />,
   // home: views,
   //  gallery: <Gallery data={appdata} />
  };
 *   const views = [
    <Welcome data={appdata} />,
    <Mission data={appdata} />,
    <Services data={appdata} />,
    <ContactPage tile data={appdata} />,

    <Footer data={appdata} />,
  ];
 */
