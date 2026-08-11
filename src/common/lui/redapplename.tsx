import { IconButton, Typography } from "@mui/material";
import React from "react";

const RedAppleName = ({fs}:{fs: number}) => {
  return (
    <IconButton
      sx={{
        padding: "0",
        "&.MuiIconButton-root": {
          display: "flex",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: "bolder",
          color: "text.primary",
          fontSize: `${fs}px !important`,
        }}
      >
        Red
      </Typography>
      <Typography
        sx={{
          fontWeight: "bolder",
          color: "text.secondary",
          fontSize: `${fs}px !important`,
        }}
      >
        Apple
      </Typography>
    </IconButton>
  );
};

export default RedAppleName;
