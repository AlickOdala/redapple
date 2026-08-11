import { Box, Collapse, Typography } from "@mui/material";
import {
  HeadText,
  TextContext,
  ActionButton,
  LandingPage,
} from "../lui/lixmaterial";
import { useEffect, useState } from "react";
import Viewer from "../../pages/galley/viewer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ServiceProp {
  assets: Record<string, unknown[]>;
}

const Services = ({ data, id }: { data: any; id?: string }) => {
  const [assets, setAssets] = useState<ServiceProp>(
    Object.entries(data.services),
  );
  const { photography, videography, edit_and_design } = data.services ?? "";
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const [services, setServices] = useState<ServiceProp>("");


  const hundleOpen = (category) => {
    setOpen(open === category ? null : category);
  };

  useEffect(() => {
    const ServiceObj = {};
    Object.values(assets).forEach((key) => {
      const category = key[0];
      const serviceList = Object.keys(key[1]).flat();
      ServiceObj[category] = serviceList;
    });
    setServices(ServiceObj);
  },[]);
  return (
    <Box
      id={id}
      className=""
      sx={{
        px: 1,
        height: "auto",
        gap: 2,
        display: "flex",
        flexFlow: "column",
      }}
    >
      <Box className=" center-items" sx={{ height: "15%" }}>
        <Box className=" center-self">
          <HeadText fs={18} center text={"Our Services"} />
        </Box>
        <Box className=" center-self" sx={{ width: "80%" }}>
          <TextContext
            center
            text={
              "we are offer Quality Services for Our cliants. kidly view our work."
            }
          />
        </Box>
      </Box>
      <Box className="" sx={{ height: "auto", p: 3 }}>
        <Box
          className=""
          sx={{
            p: 1,
            minHeight: "60%",
            borderRadius: "8px",
            bgcolor: "#3241601b",
            backdropFilter: "grayscale(40) blur(2px)",
            boxShadow: 3,
            py: 2,
          }}
        >
          <Box className="" sx={{ marginBottom: "8px !important" }}>
            <HeadText text={"Click To Expand"} fs={12} />
          </Box>
          <Box
            className=""
            sx={{ display: "flex", flexFlow: "column", gap: 2 }}
          >
            {Object.entries(services).map(([category, service], i) => (
              <Box className="p-rel " sx={{ width: "100%" }}>
                <Box
                  key={i}
                  className=""
                  sx={{
                    bgcolor: "grey.200",
                    color: "primary.contrastText",
                    height: 32,
                    borderRadius: "50px",
                  }}
                  onClick={(e) => hundleOpen(category)}
                >
                  <HeadText center text={category} fs={12} color="text.main" />
                </Box>

                <Collapse
                  in={open === category}
                  className=""
                  sx={{
                    padding: "0 0 2px !important",
                  }}
                >
                  {Object.values(service).map((item, i) => (
                    <Box
                      key={i}
                      className=" "
                      sx={{ padding: "2px 0 !important" }}
                    >
                      <TextContext center text={item} />
                    </Box>
                  ))}
                </Collapse>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {open === null && (
        <Box
          className=""
          sx={{ p: 3, display: "flex", flexFlow: "column", gap: 2 }}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              textAlign: "center",
              fontStyle: "italic",
              lineHeight: 1,
              color: "text.secondary",
            }}
          >
            We make sure to give you <br /> Best Services for you events and
            occasions.
          </Typography>
          <Box className="">
            <ActionButton
              text="View Sumples"
              onClick={() => navigate("/gallery")}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Services;
/** 
 *      
<Viewer assets={assets[1]} />
      <Viewer assets={assets[0]} />
<Box className="">
        
       
      </Box>
      <Box className="" sx={{height:200}}>

      </Box>
 */
