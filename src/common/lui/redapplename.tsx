import { IconButton, Typography, Box } from "@mui/material";
import React from "react";
import { Image } from "mui-image";

const RedAppleName = ({
  xfs,
  logo,
  center,
  sfs,
}: {
  xfs?: number;
  sfs?: number;
  logo?: boolean;
  center?: string;
}) => {
  return (
    <Box
      className=""
      sx={{
        textShadow: "0px 0px 25px white, 0px 0px 5px #fff9eb48",
        width: "100%",
        display: "flex",
        padding: "0 !important",
        flexWrap: "nowrap",
        gap: 1,
      }}
    >
      <Box className="" sx={{}}>
        {logo && (
          <Image
            className=""
            sx={{ transform: { xs: "scale(0.8)" } }}
            src={"logo/logoSvg.svg"}
          />
        )}
      </Box>
      <Box
        className=""
        sx={{ display: "flex", margin: center ? "auto !important" : center }}
      >
        <Typography
          className="center-items"
          sx={{
            fontWeight: "bolder",
            color: "text.primary",
            fontSize: {
              xs: !xfs ? "20px" : `${sfs}px`,
              sm: !xfs ? "30px" : `${sfs}px`,
            },
          }}
        >
          Red
        </Typography>
        <Typography
          className="center-items"
          sx={{
            fontWeight: "bolder",
            color: "text.secondary",
            fontSize: {
              xs: !xfs ? "20px" : `${sfs}px`,
              sm: !xfs ? "30px" : `${sfs}px`,
            },
          }}
        >
          Apple
        </Typography>
      </Box>
    </Box>
  );
};

export default RedAppleName;

/**
 *  

      
 */
