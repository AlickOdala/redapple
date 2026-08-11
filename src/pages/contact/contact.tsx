import { Box, Typography, Stack, Grid, Toolbar } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  TextContext,
  ContactItem,
  TileContactItem,
  HeadText,
  BackgroundImage,
} from "../../common/lui/lixmaterial";
import { useOutletContext } from "react-router-dom";
import bgImage from "../../assets/webuse/homebg/bg1.webp";
interface ContactProps {
  data: Record<string, string[]>;
}

const ContactPage = ({ tile }: { tile?: boolean }) => {
  const data = useOutletContext<ContactProps>();
  const { heading, cta, details } = data.contact ?? "";

  if (tile) {
    return (
      <Box
        className=""
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          p: 1,
        }}
      >
        <Box
          className=""
          sx={{ display: "flex", flexDirection: "column", gap: "8px", p: 2 }}
        >
          <Box className="">
            <HeadText center fs={20} text={"Call OR Chart With us Today"} />
          </Box>
          <TextContext center text={heading} />
          <TextContext center text={cta} fs={12} />
        </Box>
        <Grid
          container
          className="center-items"
          sx={{}}
          direction={"row"}
          spacing={2}
          columns={2}
        >
          {details.slice(0, 4).map((item, i) => (
            <TileContactItem item={item} i={i} />
          ))}
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box
        loading="lazy "
        sx={{
          display: "flex",
          flexFlow: "column",
          gap: 5,
          py: 10,
          px: 2,
        }}
        className=""
      >
        <Box
          className=""
          sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <HeadText
            center
            fs={30}
            text={"Contacts Us"}
            color="secondary.contrastText"
          />
          <TextContext
            center
            text={heading}
            fs={16}
            sx={{ color: "secondary.contrastText" }}
          />
          <Box className="">
            <TextContext
              center
              text={cta}
              fs={16}
              sx={{ color: "secondary.contrastText" }}
            />
          </Box>
        </Box>
        <Stack
          className="center-items "
          direction={{ xs: "column", sm: "row" }}
          sx={{
            width: "100% !importany",
            flexWrap: "wrap !important",
            justifyContent: "space-between",
            display: { xs: "flex", sm: "grid" },
            gridTemplateColumns: { sm: "1fr 1fr 1fr" },
            gap: 1,
            boxSizing: "border-box",
          }}
          spacing={2}
        >
          {details.map((item: string, i: number) => (
            <ContactItem
              index={i}
              name={item.name}
              text={item.action}
              link={item.url}
              linkTo={item.linkTo}
            />
          ))}
        </Stack>
      </Box>
    );
  }
};

export default ContactPage;

/**
 *
 */
