import { Box, Collapse, Grid, Stack, Typography } from "@mui/material";
import {
  HeadText,
  TextContext,
  ActionButton,
  LandingPage,
} from "../lui/lixmaterial";
import { useEffect, useState } from "react";
import Viewer from "../../pages/galley/viewer";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Section,
  LuiHeadText,
  LuiText,
  LuiCollapse,
  LuiButton,
  LuiCard,
  LuiBulleteText,
  LuiMediaSlide,
  LuiNavigation,
} from "../lui/material";
import RandomPick, { RandomNumber } from "../../../scripts/randomPick";
import { ArrowBackRounded } from "@mui/icons-material";
import ContactPage from "../../pages/contact/contact";

interface ServiceProp {
  data: Record<string, any>;
}
interface CategoryProps {
  category: string;
}

const description = {
  Photography:
    "We capture moments that matter. Portraits, products, events-images that tell your story at aglance.",
  Videography:
    "Stories in motion. From brand films to events, we create videos that move people and build connection.",
  Designs:
    "Visuals with meaning. Branding, grapohics and layouts designed to make your story unforgettable.",
};

const info = {
  head: "Services Built To Tell Your Story",
  subhead:
    "Every brand has a story. We use Photography, Videography, and Graphic Design to bring it to the world in the most powerful way",
};

const Services = ({ menu = false }: { menu?: boolean }) => {
  const data = useOutletContext<ServiceProp>();
  const assets = data.services;
  const [open, setOpen] = useState(0);
  const navigate = useNavigate();
  const [servicesData, setServicesData] = useState({});

  useEffect(() => {
    const serviceList: Record<string, any> = {};
    Object.entries(assets).forEach(([cat, service], i) => {
      const category = cat;
      const index = RandomNumber(0, service.length);
      const images = Object.values(service)[index];
      const desc = description[category];
      serviceList[category] = { ...assets[category], desc };

    });
    setServicesData(serviceList);
  }, [open]);

  const { head, subhead } = info;
  if (menu) {
    return (
      <Section text="Services">
        <>
          <LuiHeadText text={head} />
          <LuiText text={subhead} />
          <LuiCollapse
            services={servicesData}
            showImage
            bgcolor="primary.main"
          />
          <Box className="" sx={{ py: 2 }}>
            <LuiButton
              text="View Gallery"
              center
              onClick={() => navigate("/gallery")}
            />
          </Box>
        </>
      </Section>
    );
  } else {
    const [view, setView] = useState("");
    const { category } = useParams();
    const data = servicesData[category];
    const selected = assets[category];
    const serviceInView = Object.keys(selected);

    return (
      <Box className="" sx={{ pt: 10, minHeight: { xs: "100vh" } }}>
        <LuiNavigation link={"/"} action="back"/>
        <Box sx={{ display: "flex", flexFlow: "column", gap: 4, px: 3, py: 2 }}>
          <LuiHeadText text={head} />
          <LuiText text={subhead} />
          <Stack direction={"row"} sx={{ gap: 2 }}>
            <LuiButton text="Contact" onClick={() => navigate("/contact")} />
            <LuiButton
              text="Gallery"
              onClick={() => navigate("/gallery")}
              bgcolor="transparent"
              txtcolor="black"
            />
          </Stack>
          <LuiHeadText text={"Our Resent Stories"} />
          <LuiText
            text={
              "We are Trusted by Big instutions , brand, companies and even solo cliants. View our vived stories."
            }
          />
        </Box>
        <Section text={`${category ?? "All"} Services.`}>
          <>
            <Box>
              <LuiHeadText text={"Service List"} center />
              <LuiText text={data?.desc ?? ""} fx={14} center />
              <LuiHeadText text={category} fx={20} />

              {Object.entries(selected).map(([service, image], i) => {
                if (service.toLowerCase() === view.toLowerCase()) {
                  return (
                    <Box className="" sx={{ color: "grey" }}>
                      <Box
                        sx={{
                          borderTop: "0.4px solid",
                          borderBottom: "0.4px solid",
                        }}
                      >
                        <LuiHeadText text={service} fx={14} center />
                      </Box>

                      <LuiMediaSlide images={image} />
                    </Box>
                  );
                }
              })}

              <LuiBulleteText
                texts={serviceInView}
                setClicked={setView}
                gs={12}
              />
            </Box>

            <ContactPage disableLocation />
          </>
        </Section>
      </Box>
    );
  }
};

export default Services;

/**
 * <Box className="" sx={{ py: 2 }}>
         <ArrowBackRounded onClick={() => navigate("/")} />
       </Box>
       <Box sx={{ display: "flex", flexFlow: "column", gap: 4, px: 3, py: 2 }}>
         <LuiHeadText text={head} />
         <LuiText text={subhead} />
         <Stack direction={"row"} sx={{ gap: 2 }}>
           <LuiButton text="Contact" onClick={() => navigate("/contact")} />
           <LuiButton
             text="Gallery"
             onClick={() => navigate("/gallery")}
             bgcolor="transparent"
             txtcolor="black"
           />
         </Stack>
         <LuiHeadText text={"Our Resent Stories"} />
         <LuiText
           text={
             "We are Trusted by Big instutions , brand, companies and even solo cliants. View our vived stories."
           }
         />
       </Box>
 
 */
