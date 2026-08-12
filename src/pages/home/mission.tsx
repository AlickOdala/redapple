import { Box, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {

  HeadText,
  TextContext,
  ActionButton,
  LandingPage,
} from "../../common/lui/lixmaterial";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/webuse/homebg/bg3.webp";

const Mission = ({ data }: { data: string }) => {
  const [index, setIndex] = useState(0);
  const { services, mission, vision } = data ?? {};
  const navigate = useNavigate();
  const newData = [
    { name: "Mision", disc: mission },
    { name: "Vision", disc: vision },
  ];

  const serviceList = Object.keys(services);
  const onText = serviceList[index];

  useEffect(() => {
    const timeinterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % serviceList.length);
    }, 5000);

    timeinterval;

    return () => clearInterval(timeinterval);
  }, [index]);

  return (
    <Box
      className=" vh"
      sx={{
        backgroundBlendMood: "color",
        position: "relative",
        boxSizing: "bolder-box",
        margin: "auto !important",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        color: "secondary.contrastText",
        pb:2
      }}
    >
      <Box className=" p-rel">
        <Burner text={onText} />
      </Box>
      <Box className=" p-rel ">
        <PageText data={newData} />
      </Box>
      <Box className="center-items ">
        <ActionButton
          text={"Read More About Us!"}
          onClick={() => navigate("/about")}
        />
      </Box>
    </Box>
  );
};

const Burner = ({ text }: { text?: string }) => {
  return (

      <Stack
        className="  p-rel red"
        sx={{
          height: {xs:180, sm:280},
          color: "primary.contrastText",
          justifyContent: "space-around",
          display: "flex",
          p: 2,
        }}
        spacing={1}
      >
        <Box
          className="p-rel"
          sx={{
            py: 1,
            backgroundImage:
              "linear-gradient(to right,transparent, #701f1f, #701f1f, transparent)",
          }}
        >
          <HeadText
            text="Our Snack Services!"
            center
            color={"text.main"}
          />
        </Box>

        <Box
          className=" center-self"
          sx={{ width: "80%", height: "40%", textAlign: "center" }}
        >
          <Box
            sx={{
              height: 50,
              borderRadius: "8px",
              bgcolor: "#1212121c",
              backdropFilter: "blur(1px)",
            }}
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
              <HeadText fs={30} text={text} color="text.main" />
            </motion.div>
          </Box>
        </Box>
        <TextContext
          center
          fs={12}
          color="text.main"
          sx={{
            textShadow: "0 0 4px black, 0 0 10px black, 0 0 20px white",
          }}
          text={
            "We offer professional services dedicated to preserving life's most precious moments through high-quality photos and cinematic videos."
          }
        />
      </Stack>

  );
};

const PageText = ({ data }: { data: string }) => {
  return (
    <Stack
      className=" red center-items fh"
      sx={{
        height: { xs: "auto", sm: "50%" },
        px: 4,
        //display: {xs:"flex"},
        gap: { xs: 2, sm: 2 },
        py:2
      }}
      direction={{ sm: "row" }}
    >
      {(data ?? []).map((item, i) => (
        <LandingPage>
          <Box
            className=" fh p-rel center-self"
            sx={{
              aspectRatio: { sm: 5/ 2 },
              width: "100% !important",
              //bgcolor: "background.default",
              borderRadius: "8px",
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              padding:'8px 16px !important'
            }}
          >
            <Box sx={{  padding: "16px 0 !important"  }} className="">
              <HeadText text={item.name} fs={20} center />
            </Box>
            <TextContext
              className=""
              center
              //fs={}
              text={item.disc}
              sx={{ display: "flex", flexGrow: 1, paddingTop: "10px" }}
            />
          </Box>
        </LandingPage>
      ))}
    </Stack>
  );
};

export default Mission;

/**
 *  <Box
       className=" fh p-rel center-self"
       sx={{
         aspectRatio: { sm: 4 / 3.5 },
         width: "100% !important",
         //bgcolor: "background.default",
         borderRadius: "8px",
         boxShadow: 3,
         padding: "16px 8px !important",
         display: "flex",
         flexDirection: "column",
       }}
     >
       <Box className="" sx={{ padding: "16px 0 !important" }}>
         <HeadText center fs={20} text={head} />
       </Box>
       <TextContext text={text} center />
     </Box>
     </LandingPage>
 */