import {
  Box,
  Grid,
  Stack,
  CardMedia,
  Typography,
  IconButton,
  Toolbar,
} from "@mui/material";

import ImageCard, {
  HeadText,
  TextContext,
  BackgroundImage,
} from "../../common/lui/lixmaterial";
import { motion } from "framer-motion";
import { useState, useEffect, lazy } from "react";
import { Height, LanguageOutlined } from "@mui/icons-material";
import { Image } from "mui-image";
import RedAppleName from "../../common/lui/redapplename";
import logo from "../../assets/webuse/logo/logo.svg";
import bg1 from "../../assets/webuse/homebg/bg1.webp";
import bg2 from "../../assets/webuse/homebg/bg2.webp";
import bg3 from "../../assets/webuse/homebg/bg3.webp";
import RandomPick, { RandomNumber } from "../../../scripts/randomPick";
import Searcher from "../../common/lui/searcher";
import { useNavigate } from "react-router-dom";

const Welcome = ({ data }: { data: any }) => {
  const bgimages = [bg1, bg2, bg3];
  const [i, setI] = useState(RandomNumber(0, bgimages.length));
  const [index, setIndex] = useState(0);

  const variant = {
    container: {
      backgroundImage: "linear-gradient(to top, #121212, transparent)",
      color: "primary.contrastText",
      justifyContent: { xs: "space-around", sm: "none !important" },
      px: 2,
      pt: { xs: 8, sm: 12 },
      pb: 4,
    },
  };

  const { welcome, tagline } = data;

  const links = [
    { name: "Gallery", link: "/gallery" },
    { name: "Booking", link: "/booking" },
    { name: "Contacts", link: "/contacts" },
  ];

  useEffect(() => {
    setI(RandomNumber(0, bgimages.length));
  }, []);

  useEffect(() => {
    const setinterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tagline.length);
    }, 6000);

    setinterval;
    return () => clearInterval(setinterval);
  }, [index]);

  return (
    <BackgroundImage image={bgimages[i]} parallax={true}>

        <Grid container className=" vh" spacing={1} sx={variant.container}>
          <Grid
            className=""
            size={{ xs: 12, sm:6}}
            columns={2}
            sx={{ height: { xs: "auto"}, boxSizing: "border-box", px: 1 }}
          >
            <Box
              className=" fh p-rel center-items center-self"
              sx={{ height: "fit-content" }}
            >
              <AppleLogo />
              <Box className=" " sx={{ margin: "auto !important" }}>
                <RedAppleName sfs={50} center={true} />
                <TextContext
                  text="The Creative Media"
                  center
                  color="primary.contrastText"
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            className=" p-rel"
            size={{ xs: 12, sm:7}}
            sx={{ height: "auto" }}
          >
            <Box
              className=" fh"
              sx={{
                display: "flex",
                flexFlow: "column",
                gap: 1,
                justifyContent: "center !important",
              }}
            >
              <Box className=" " sx={{ height: "32px" }}>
                <HeadText center text="Welcome" color="primary.contrastText" />
              </Box>
              <TextContext
                className=""
                color="primary.contrastText"
                center
                fs={14}
                text={welcome}
              />
            </Box>
          </Grid>
          <Grid
            className=" p-rel"
            size={{ xs: 12, sm: 7 }}
            sx={{ height: { xs: "auto", sm: "10%" } }}
          >
            <Box className=" ">
              <FastLinks links={links} />
            </Box>
          </Grid>
        </Grid>

    </BackgroundImage>
  );
};

const FastLinks = ({ links }: { links: any }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{}}>
      <Box
        className="p-rel "
        sx={{
          py: 1,
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "11px" }}>
          Quick Jump
        </Typography>
      </Box>
      <Stack
        className="p-rel center-items"
        direction={"row"}
        spacing={2}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          py: 1,
        }}
      >
        {links.map((link, i) => (
          <Box
            className=" center-items "
            key={i}
            sx={{
              border: "0.5px solid",
              borderRadius: "50px !important",
              height: "20px !important",
              m: "auto",
            }}
          >
            <IconButton
              key={i}
              onClick={() => navigate(link.link)}
              sx={{
                fontSize: 11,
                color: "inherit",
              }}
            >
              {link.name}
            </IconButton>
          </Box>
        )) ?? ""}
      </Stack>
    </Box>
  );
};

const AppleLogo = () => {
  return (
    <Box
      className=""
      sx={{
        display: "block",
        p: 1,
        margin: "auto !important",
        width:"60%", 
      }}
    >
      <Image
        showLoading
        src={logo}
        height={"100%"}
        width={"100%"}
        errorIcon
        //sx={{ transform: { xs: "scale(1)", sm: "scale(0.8)" } }}
        imgProps={{ loading: "lazy" }}
      />
    </Box>
  );
};
export default Welcome;
/**
 * <Box sx={variant.container} className="p-rel  vh ">
        <Box className=" p-rel " sx={{}}>
         
            <Grid className="  center-items" size={{ xs: 12 }}>
              
            </Grid>
          </Grid>
        </Box>
        <Box className=" red" sx={{}}>
          <Grid container className=" fh center-items" spacing={3}>
            <Grid
              size={{ xs: 12 }}
              className="p-rel red "
              sx={{ width: "100%" }}
            >
              <Box
                className="p-rel "
                sx={{
                  display: { sm: "none" },
                  py: 1,
                }}
              >
                <motion.div
                  className="center-items  red center-items"
                  key={tagline[index]}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1, delay: 0.4 },
                  }}
                  exit={{ y: -20, opacity: 0 }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "16px !important",
                      textAlign: "center",
                    }}
                  >
                    {tagline[index]}
                  </Typography>
                </motion.div>
              </Box>
              
            </Grid>
            <Grid
              className=""
              size={{ xs: 12 }}
              sx={{ height: { xs: "auto%" } }}
            >
             
            </Grid>
            <Grid className=" center-self" xs={12} sx={{ py: 1 }}>
              <Searcher />
            </Grid>
          </Grid>
        </Box>
      </Box>
 */
