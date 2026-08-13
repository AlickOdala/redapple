import { Box, Collapse, Grid, Typography } from "@mui/material";
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
} from "../lui/material";
import RandomPick, { RandomNumber } from "../../../scripts/randomPick";
import { ArrowBackRounded } from "@mui/icons-material";

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
      console.log("images", images);
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
          <LuiCollapse services={servicesData} showImage bgcolor="primary.main"/>
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

    console.log("view", view);

    return (
      <Box className="" sx={{ pt: 10, px: 2 }}>
        <Box className="" sx={{py:2}}>
          <ArrowBackRounded onClick={() => navigate("/")} />
        </Box>
        <LuiHeadText text={head} />
        <LuiText text={subhead} />
        <LuiButton text="Contact" />

        <Section text={`${category ?? "All"} Services.`}>
          <>
            <LuiHeadText text={category} center />
            <LuiText text={data?.desc ?? ""} fx={12} center />
            <LuiCard>
              <>
                <LuiHeadText text={"Service List"} center />
                <LuiBulleteText texts={serviceInView} setClicked={setView} />
              </>
            </LuiCard>
            {Object.entries(selected).map(([service, image], i) => {
              if (service.toLowerCase() === view.toLowerCase()) {
                return (
                  <Box className="" sx={{py:2}}>
                    <LuiHeadText text={service} fx={12}/>
                    <LuiMediaSlide images={image} />
                  </Box>
                );
              }
            })}
          </>
        </Section>
      </Box>
    );
  }
};

export default Services;
