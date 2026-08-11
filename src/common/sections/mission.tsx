import { Box, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { BackgroundImage, HeadText, TextContext } from "../lui/lixmaterial";

const Mission = ({ data }: { data: string }) => {
  const [index, setIndex] = useState(0);
  const { services, mission, vision } = data ?? {};

  const newData = [
    { name: "Mision", disc: mission },
    { name: "Vision", disc: vision },
  ];

  const serviceList = Object.keys(services);
  const onText = serviceList[index].toUpperCase();

  useEffect(() => {
    const timeinterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % serviceList.length);
    }, 5000);

    timeinterval;

    return () => clearInterval(timeinterval);
  }, [index]);

  return (
    <Box
      className="debug fh"
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundBlendMood: "color",
        position: "relative",
        boxSizing: "bolder-box",
        margin: "auto !important",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        padding: { xs: "0 0 16%", sm: "0 0 20%" },
        color:"secondary.contrastText"
      }}
    >
      <Box className=" p-rel">
        <Burner text={onText} />
      </Box>
      <Box className=" p-rel">
        <PageText data={newData} />
      </Box>
      <Box className="p-rel  center-items">
        <ActionButton text={"Click For Booking!"} />
      </Box>
    </Box>
  );
};

const Burner = ({ text }: { text?: string }) => {
  return (
    <BackgroundImage>
      <Stack
        className=" p-rel"
        sx={{
          height: 180,
          color: "primary.contrastText",
          justifyContent: "space-around",
          display: "flex",
          p: 2,
          backdropFilter: "blur(1px)",
        }}
        spacing={1}
      >
        <Box className=" ">
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: { xs: "14px", sm: "18" },
            }}
          >
            RedApple Services
          </Typography>
        </Box>
        <Box
          className=" center-self"
          sx={{ width: "80%", height: "40%", textAlign: "center" }}
        >
          <motion.div
            className="fh"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            exit={{
              x: "100% ",
              transition: {
                duration: 2,
              },
            }}
            key={text}
          >
            <HeadText fs={20} text={text} />
          </motion.div>
        </Box>
        <Box className=" ">
          <Typography
            sx={{
              fontSize: "9px",
              textAlign: "center",
              padding: "5px 10% ",
              lineHeight: 1,
              borderTop: "0.5px solid grey",
            }}
          >
            We offer professional services dedicated to preserving life's most
            precious moments through high-quality photos and cinematic videos.
          </Typography>
        </Box>
      </Stack>
    </BackgroundImage>
  );
};

const PageText = ({ data }: { data: string }) => {
  return (
    <Stack
      className=" red center-items fh"
      sx={{
        height: "30%",
        padding: { xs: "16px", sm: "0 42px" },
        display: "flex",
        gap: "10px",
      }}
      direction={{ sm: "row" }}
    >
      {(data ?? []).map((item) => (
        <Box
          className="center-self p-rel"
          sx={{
            width: { sm: "40%" },
            height: "50%",
            padding: "8px !important",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ height: "32px" }} className="">
            <HeadText text={item.name} fs={20} />
          </Box>
          <TextContext
            className=""
            fs={14}
            text={item.disc}
            sx={{ display: "flex", flexGrow: 1, paddingTop: "10px" }}
          />
        </Box>
      ))}
    </Stack>
  );
};

const ActionButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <Box
      className="center-self p-rel"
      sx={{
        width: "fit-content",
        borderRadius: "50px !important",
        //color: "secondary.main",
        border: "1px solid",
        height: "100%",
      }}
    >
      <IconButton
        onClick={onClick}
        sx={{
          fontSize: "12px",
          fontWeight: "bolder",
          //color: "secondary.main",
        }}
      >
        {text}
      </IconButton>
    </Box>
  );
};
export default Mission;
