import {
  Box,
  Collapse,
  Container,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeadText, TextContext, TextIcon } from "../lui/lixmaterial";
import {
  LuiCard,
  LuiHeadText,
  LuiText,
  Section,
  LuiButton,
} from "../lui/material";
import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Footer = ({ data }: { data?: any }) => {
  const { feedback, faq, location, contact } = data ?? "";
  const navigate = useNavigate();
  return (
    <Box className="" sx={{ bgcolor: "background.paper" }}>
      <Section>
        <>
          <LuiCard>
            <>
              <Box className="" sx={{ display: "flex", flexWrap: "nowrap" }}>
                <Box className="" sx={{ inlineFlex: "flex", flexGrow: 1 }}>
                  <LuiHeadText text="Redapple " />
                </Box>
                <Box
                  className=""
                  sx={{ inlineFlex: "flex", flexGrow: 1 }}
                ></Box>
              </Box>
            </>
            <LuiText
              text={
                "We are available in different praforms. follow us on Facebook, instagram, X, and Youtube."
              }
            />
          </LuiCard>
          <LuiCard>
            <>
              <LuiHeadText text={"Feedback"} />
              <LuiText text={feedback} />
              <Box className="">
                <LuiButton
                  text="Send Feedback"
                  onClick={() => navigate("/none")}
                />
              </Box>
            </>
          </LuiCard>
        </>
      </Section>
      <Box sx={{ py: 2 }}>
        <LuiText text="Website Developed By" center fx={12} />
        <LuiText
          text="Alick Odala | Powered By Infiity Digital Ink."
          center
          fx={12}
        />
      </Box>
    </Box>
  );
};

const Links = ({ links }: { links?: any }) => {
  const contacts = links.details;
  const variant = {
    icon: {
      //transform: "scale(0.5)",
      display: "inline-flex",
    },
  };
  useEffect(() => {});
  const icon = [
    { name: "X", icon: <X /> },
    { name: "facebook", icon: <Facebook sx={variant.icon} /> },
    { name: "instagram", icon: <Instagram sx={variant.icon} /> },
    { name: "youtube", icon: <YouTube sx={variant.icon} /> },
  ];
  return (
    <Box className=" p-rel" sx={{ display: "flex", gap: 1 }}>
      {contacts.map((item: any) => {
        const name = item.name.toLowerCase().trim();
        const iconName = icon.find((i) => i.name.toLowerCase() === name);

        return (
          <Box className="">
            <IconButton>{iconName?.icon}</IconButton>
          </Box>
        );
      })}
    </Box>
  );
};

export default Footer;
