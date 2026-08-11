import { Box } from "@mui/material";
import { HeadText, TextContext } from "../lui/lixmaterial";
import Viewer from "../viewer";
import { useEffect, useState } from "react";

const Services = ({ data }: { data: string }) => {
  const { photography, videography } = data.services ?? "";

  const photgraphyServices = [
    "Wedding Films",
    "Event Coverage",
    "Corporate Videos",
    "Promotional & Commercial Videos",
    "Music Videos",
    "Documentary Production",
    "Social Media Content Creation",
    "Interviews & Testimonials",
    "Real Estate Videos",
    "Drone Videography (where available)",
  ];

  useEffect(() => {
    console.log("servidata", photography);
  });

  return (
    <Box className="debug">
      <Box className="debug">
        <HeadText fs={18} center text={"Our Services"} />
        <TextContext
          center
          text={
            "we are offer Quality Services for Our cliants. kidly view our work."
          }
        />
      </Box>
      <Viewer
        image={photography}
        services={photgraphyServices}
        category="posters"
        heading="Photography"
      />

      <Viewer
        image={photography}
        services={photgraphyServices}
        category="posters"
        heading="Videography"
      />
    </Box>
  );
};

export default Services;
