import {
  Box,
  Grid,
  Stack,
  CardMedia,
  Typography,
  IconButton,
  Toolbar,
} from "@mui/material";

import ImageCard, { HeadText, TextContext } from "../../common/lui/lixmaterial";
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
  LuiBgImage,
  LuiBulleteText,
} from "../../common/lui/material";
import { useNavigate } from "react-router-dom";
import { VibrationX } from "../../common/lui/lui-motion";
import image from "../../assets/webuse/loading/loading.webp";
const Welcome = ({ data }: { data: any }) => {
  const bgimages = [bg1, bg2, bg3];
  const [i, setI] = useState(RandomNumber(0, bgimages.length));
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const variant = {
    container: {
      color: "primary.contrastText",
      px: 2,
      pt: 12,
      pb: 2,
      height: { xs: "90vh", sm: "100%" },
      display: "flex",
      flexFlow: "column",
      gap: 2,
      justifyContent: "space-around",
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
    }, 8000);

    setinterval;
    return () => clearInterval(setinterval);
  }, [index]);

  const links = [
    { name: "Contacts", link: "/contact" },
    { name: "Gallery", link: "/gallery" },
    { name: "Portifolio", link: "/portifolio" },
  ];

  const text = [
    "Our Goals",
    "Our Vissions",
    "Find Our Services",
    "Book Online",
    "View Our Sumples",
    " Do Not Forgat! Contact Us.",
  ];

  return (
    <Box>
      <LuiBgImage image={bgimages[i]} parallax>
        <Box sx={variant.container}>
          <Box sx={{ py: 1, zIndex: 10 }}>
            <Box
              className="center-items p-rel"
              sx={{
                height: 50,
                borderRadius: "50px",
                border: "0.2px solid #ffffff63",
                boxShadow: 3,
                boxSizing: "border-box",
                p: 1,
                backdropFilter: "blur(8px)",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  gap: 0.5,
                  py: 1,
                  justifyContent: { xs: "center", sm: "left" },
                }}
              >
                {links.map((link) => (
                  <IconButton onClick={() => navigate(link.link)}>
                    <LuiHeadText
                      text={link.name}
                      fx={16}
                      color="secondary.main"
                    />
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Box>
          <LuiCard shadow h={{ xs: 46, sm: "auto" }}>
            <Box>
              <VibrationX>
                <LuiHeadText
                  text={info.maintext}
                  color="primary.contrastText"
                  fx={32}
                />
              </VibrationX>
              <LuiText
                text={info.subtext}
                color="primary.contrastText"
                fx={22}
                fm={0.9}
              />

              <Stack
                sx={{ diplay: "flex", gap: 1, flexFlow: "row" }}
                className=""
              >
                <LuiButton
                  text="Read More"
                  onClick={() => navigate("/about")}
                />
              </Stack>
            </Box>
          </LuiCard>

          <Box sx={{ px: 4 }}>
            <LuiHeadText
              text={info.trusties.maintext}
              color="primary.contrastText"
              fx={16}
              center
            />

            <LuiBulleteText
              texts={info.trusties.brands}
              color="secondary.contrastText"
              bgcolor="secondary.main"
            />
          </Box>
        </Box>
      </LuiBgImage>
      <Section text={"About"}>
        <>
          <LuiHeadText text={info.about} />
          <LuiText text={info.aboutSubtex} />

          <LuiCard ratio={{ xs: 3 / 2, sm: 9 / 3 }}>
            <>
              <LuiText text={"Find More About Us."} />
              <motion.div
                key={index}
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.5,
                  //repeat: Infinity,
                  //repeatType: "loop",
                  repeatDelay: 5,
                  type: "pring",
                  stiffness: 800,
                }}
              >
                <Box className="center">
                  <LuiHeadText text={text[index]} center />
                </Box>
              </motion.div>
            </>
          </LuiCard>

          <Box className="center-items" sx={{ py: 2 }}>
            <LuiButton text="See About US" onClick={() => navigate("/about")} />
          </Box>
        </>
      </Section>
    </Box>
  );
};

export default Welcome;
