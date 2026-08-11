import { Box, Typography } from "@mui/material";
import React from "react";
import Services from "./services";
import { useOutletContext } from "react-router-dom";
import { Loading } from "../lui/lixmaterial";

const Settings = () => {
  const data = useOutletContext()
  return (
    <Box sx={{ py: 8 }}>
      <Typography>Settings</Typography>
      <Loading />
    </Box>
  );
};

export default Settings;
