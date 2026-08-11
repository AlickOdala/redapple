import {
  Box,
  Grid,
  Stack,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import img from "../../assets/image1.jpg";
import logo from "../../assets/appleLogo.png";
import ImageCard, {
  HeadText,
  TextContext,
  BackgroundImage,
} from "../lui/lixmaterial";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Height, LanguageOutlined } from "@mui/icons-material";

const Welcome = ({ data }: { data: any }) => {
  const { welcome, tagline } = data;

  const [index, setIndex] = useState(0);

  const links = [
    { name: "Service", link: "#" },
    { name: "Booking", link: "#" },
    { name: "Contacts", link: "#" },
  ];

  useEffect(() => {
    const setinterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tagline.length);
    }, 6000);

    setinterval;
    return () => clearInterval(setinterval);
  });

  const variant = {
    container: {
      bgcolor: {
        xs: "primary.main",
        sm: "",
      },
      backgroundImage: {
        sm: `linear-gradient(to top, #121212, transparent), url(${img})`,
      },
      color: "primary.contrastText",
      backgroundSize: "cover",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundBlendMood: "color",
      //padding: { sm: "10% 0 " },
      height: "100%",
      position: "relative",
      boxSizing: "bolder-box",
    },
    welText: {
      height: "20%",
      display: { xs: "none", sm: "block" },
    },
    top: {
      height: "50%",
      backgroundImage: {
        xs: `linear-gradient(to top, #121212dc, #121212ae ), url(${img})`,
        sm: "none",
      },
      backgroundSize: "cover",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      color: "secondary.main",
    },
    bottom: {
      height: "50%",
      justifyContent: "space-between !important",
      display: "flex",
      flexDirection: "column",
      padding: "8% 0 !important",
      P: 1,
    },
  };
  return (
    <Grid container sx={variant.container} className="p-rel">
      <Grid className="red " size={{ xs: 12 }} sx={variant.top}>
        <Box
          className="red center-self center-items fh p-rel"
          sx={{ padding: "24px !important" }}
        >
          <Box className="p-rel center-self" sx={{ width: { sm: "30%" } }}>
            <motion.div
              className="red"
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{}}
              viewport={{ once: true }}
            >
              <CardMedia
                component={"img"}
                loading="eager"
                image={logo}
                sx={{
                  backdropFilter: "blur(0.5px)",
                  objectfit: "cover",
                  objectPosition: "center",
                  transform: "scale(0.8)",
                }}
              />
            </motion.div>
          </Box>

          <Box
            className="p-rel center-self"
            sx={{
              bottom: "15%",
              display: { sm: "none" },
            }}
          >
            <motion.div
              className="center-items"
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
                }}
              >
                {tagline[index]}
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Grid>
      <Grid className="" size={{ xs: 12, sm: 12 }} sx={variant.bottom}>
        <Stack className="fh" spacing={1}>
          <Box className="" sx={{ height: "32px", display: { sm: "none" } }}>
            <HeadText center fs={24} text="Welcome" />
          </Box>
          <Box className="grow">
            <TextContext
              center
              text={welcome}
              className="center-self"
              sx={{
                width: { xs: "70%" },
                height: "100%",
              }}
            />
          </Box>
          <Stack className="p-rel" sx={{ p: 1 }} spacing={1}>
            <Box
              className=""
              sx={{
                borderBottom: "0.2px solid grey",
              }}
            >
              <Typography sx={{ textAlign: "center" }}>Quick Jump</Typography>
            </Box>
            <Stack
              className="p-rel center-items"
              direction={"row"}
              spacing={1}
              sx={{ alignItems: "center" }}
            >
              {links.map((link: any) => (
                <IconButton
                  key={link}
                  className=""
                  onClick={() => link.link}
                  sx={{
                    fontSize: 11,
                    //fontWeight: "bold !important",
                    color: "inherit",
                  }}
                >
                  {link.name}
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Welcome;
