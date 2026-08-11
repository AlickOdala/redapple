import React, { useState } from "react";
import { Box, Drawer, Paper, Toolbar, Stack, Container } from "@mui/material";
import { MenuButton } from "./lui/lixmaterial";

interface Props {
  open: boolean;
}

const SlideMenu = ({ open }: Props) => {
  const [openSlide, setOpenSlide] = useState<false | open>(open);

  return (
    <Box onClick={() => setOpenSlide(false)} className="fh">
      <Drawer
        open={open}
        variant="temporary"
        anchor="right"
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Paper
          className="fh"
          sx={{
            width: "230px",
            padding: "20% 16px 0",
          }}
        >
          <Toolbar />
          <Stack className="" spacing={1}>
            <MenuButton />
          </Stack>
        </Paper>
      </Drawer>

      <Container
        className="p-rel  center-items"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          bgcolor: "background.default",
          height: "100%",
          zIndex: 1000,
        }}
        disableGutters
      >
        <Paper
          className="debug fh"
          sx={{
            //width:"100%",
            padding: "20% 16px 0",
            display: { xs: "none", md: "block" },
            minHeight: "100%",
          }}
        >
          <Toolbar />
          <Stack className="" spacing={1}>
            <MenuButton />
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default SlideMenu;

/**
 *
 */
