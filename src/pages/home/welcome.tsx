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

} from "../../common/lui/lixmaterial";
import { motion } from "framer-motion";
import { useState, useEffect, lazy } from "react";
import logo from "../../assets/webuse/logo/logo.svg";
import bg1 from "../../assets/webuse/homebg/bg1.webp";
import bg2 from "../../assets/webuse/homebg/bg2.webp";
import bg3 from "../../assets/webuse/homebg/bg3.webp";
import RandomPick, { RandomNumber } from "../../../scripts/randomPick";
import {
  LuiButton,
  LuiCard,
  LuiHeadText,
  LuiText,
  Section,
  LuiCardMedia,
  LuiBgImage
} from "../../common/lui/material";
import { useNavigate } from "react-router-dom";

const Welcome = ({ data }: { data: any }) => {
  const bgimages = [bg1, bg2, bg3];
  const [i, setI] = useState(RandomNumber(0, bgimages.length));
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const variant = {
    container: {
      backgroundImage: "linear-gradient(to top,  #12121290, transparent)",
      color: "primary.contrastText",
      justifyContent: { xs: "space-between", sm: "none !important" },
      px: 2,
      pt: { xs: 12, sm: 12 },
      pb: 4,
      minHeight: "100vh",
      flexFlow: { xs: "column" },
    },
  };

  const { welcome, tagline } = data;

  const info = {
    maintext: "Capture Life. Create Impact.",
    subtext:
      "Redapple Creative Media is a creative studio specializing in Photography, Videography, and Design. We turn your moments and brand stories into high-quality visuals that last.",
    links: [
      { name: "Gallery", link: "/gallery" },
      { name: "Booking", link: "/booking" },
      { name: "Contacts", link: "/contacts" },
    ],

    trusties: {
      maintext: "Trusted By Popular Brands and Orgaizations.",
      brands: ["Wanderers FC", "FAM", "UFULU Golf Club"],
    },
    about: "Creating Visuals that Inspire And Connect",
    aboutSubtex:
      "Here is where creativity meets professionalism. We deliver high-quality services. We have worked with many companies and influantial brands.",
  };

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
    <Box className="">
      <LuiBgImage image={bgimages[i]} parallax>
        <Box className="denug" sx={variant.container}>
          <LuiCard ratio={3 / 4.1} shadow>
          <> 
          <LuiHeadText text={info.maintext} color="primary.contrastText" fx={24} />
            <LuiText text={info.subtext} color="primary.contrastText" />
            <Stack
              sx={{ diplay: "flex", gap: 1, flexFlow: "row" }}
              className=""
            >
              <LuiButton
                text="Read More"
                bgcolor="trasnparent"
                onClick={() => navigate("/about")}
              />
              <LuiButton
                text="Contact"
                bgcolor="trasnparent"
                txtcolor="white"
                onClick={() => navigate("/contact")}
              />
            </Stack>
          </>
           
          </LuiCard>
          <Box className="" sx={{ pt: 4 }}>
            <LuiHeadText
              text={info.trusties.maintext}
              color="primary.contrastText"
              fx={12}
            />
          </Box>
          <Stack
            className=" red"
            direction="row"
            sx={{
              flexWrap: "wrap",
              rowGap: 1,
              columnGap: 2,
            }}
          >
            {info.trusties.brands.map((item, i) => (
              <Box
                className=" "
                sx={{
                  py: 0.2,
                  px: 1,
                  bgcolor: "rgba(18, 18, 18, 0.61)",
                  borderRadius: "4px",
                }}
              >
                <Typography
                  key={i}
                  className="center-items"
                  sx={{
                    minWidth: 90,
                    fontSize: "12px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </LuiBgImage>
      <Section text={"About"}>
        <>
        <LuiHeadText text={info.about} />

        <LuiText text={info.aboutSubtex} />
        <LuiCardMedia />

        <Box className="center-items" sx={{ py: 2 }}>
          <LuiButton
            text="See About US"
            bgcolor="trasnparent"
            //txtcolor="white"
            onClick={() => navigate("/about")}
            bgcolor=""
          />
        </Box>
        </>
        
      </Section>
    </Box>
  );
};

export default Welcome;
