import React, { useState, useEffect } from "react";

import { Dialog, Grid, Paper, Stack, Box, Typography } from "@mui/material";
import { MoreVert, Home, ArrowBack, Close } from "@mui/icons-material";
import RedAppleName from "./lui/redapplename";
import { FfpNavList } from "./lui/lixmaterial";

interface Props {
  leftAside?: React.ReactNode;
  main?: React.ReactNode;
  page?: string;
  onClick?: () => void;
  open?: boolean;
  onClose?: () => void;
}

const FfpLayout = ({
  leftAside,
  main,
  page,
  onClick,
  open,
  onClose,
}: Props) => {

  const [isOpen, setIsOpen] = useState(false);


  const imageModules = import.meta.glob("@/assets/posters/webp/*.webp", {
    eager: true,
    import: "default",
  });

  const posters = Object.entries(imageModules).map(([path, src], index) => ({
    id: index + 1,
    name: path.split("/").pop()?.split(".")[0],
    src: src as string,
  }));

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const variant = {
    container: { height: "100%" },
    leftview: {
      size: { xs: 12, sm: 12 },
      height: { xs: "10%", sm: "90%" },
      padding: { sm: "10%  3% ", xs: "8px" },
      overflow: "auto !important",
      borderRight: "0.5px solid",
    },
    mainview: {
      size: { xs: 12, sm: 10 },
      height: {
        xs: "80%",
        sm: "90%",
      },
      padding: "0 8px",
      overflow: "auto",
      bgcolor: "grey.500",
    },
  };

  const { container, leftview, mainview } = variant;

  try {
    return (
      <Dialog
        loading={"lazy"}
        open
        fullScreen
        //onClose={handleOpen}
        sx={{
          "& .MuiDialog-paper": {
            bgcolor: "background.default",
          },
        }}
      >
        <Grid container className="debug" sx={container} spacing={1}>
          <Grid
            container
            className=""
            size={{ xs: 12 }}
            sx={{ height: "auto" }}
            column={2}
          >
            <Box className="grow" sx={{ padding: "10px 0  !important" }}>
              <RedAppleName fs={18} />
            </Box>{" "}
            <Box className=" grow right center-items">
              <Close onClick={handleClick} />
            </Box>
          </Grid>

          <Grid
            className=" red p-rel"
            size={{ xs: 12, sm: 2 }}
            sx={leftview}
          >
            {leftAside}
          </Grid>

          <Grid
            className="p-rel scroll-paren"
            size={mainview.size}
            spacing={2}
            sx={mainview}
          >
            {main}
          </Grid>
        </Grid>
      </Dialog>
    );
  } catch (e: unknown) {
    console.error(e);
    return (
      <Paper
        sx={{ margin: "50% 20%  !important" }}
        className="self-center p-abs text"
      >
        {" "}
        Something Went wrong:{(e as Error).message}
      </Paper>
    );
  }
};

export default FfpLayout;
