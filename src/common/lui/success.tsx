import { Box, Toolbar, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeadText, TextContext, TextIcon } from "./lixmaterial";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const MessagePage = ({ message }: { message?: any }) => {
  const navigate = useNavigate();
  const useFormData = message ?? "";
  const [open, setOpen] = useState(true);



  return (
    <AnimatePresence>
      <motion.div
        initial={{ z: 0, opacity: 0 }}
        whileInView={{
          z: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        exit={{ z: 0, opacity: 0 }}
      >
        <Dialog
          className="vh "
          open={open}
          fullScreen
          onClose={() => setOpen(!open)}
          sx={{
            "& .MuiDialog-paper": {},
          }}
        >
          <Box
            className=" center-self fh"
            sx={{
              width: "100%",
              display: "flex",
              flexFlow: "column",
              justifyContent: "space-around",
            }}
          >
            <Box className="" sx={{ height: 100 }}>
              <HeadText center text="Sent !" />
            </Box>
            <Box className="" sx={{ height: 300 }}>
              <Box
                className=" center-self"
                sx={{
                  padding: "16px !important",
                  width: 230,
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <TextContext text="Your Massage is:" center />
                {Object.entries(useFormData).map(([key, value]) => (
                  <Box
                    key={key}
                    className="center-self center-items"
                    sx={{
                      padding: "0 0 8px !important",
                      lineHeight: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: "10px", fontWeight: "bolder" }}>
                      {`${key.toUpperCase()}:`}{" "}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", padding: "0 4px" }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className=" center-items" sx={{ height: 100 }}>
              <TextIcon
                onClick={() => navigate("/")}
                text="OK"
                className="center-item center-self "
                textProp={{
                  fontWeight: "bolder",
                  fontSize: "16px",
                  textAlign: "centers",
                }}
                rootProp={{
                  borderRadius: "100px",
                  aspectRatio: 1 / 1,
                  height: "40px",
                  display: "flex",
                  boxShadow: 4,
                }}
              />
            </Box>
          </Box>
        </Dialog>
      </motion.div>
    </AnimatePresence>
  );
};

export default MessagePage;
