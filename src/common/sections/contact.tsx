import { Box, Typography, Stack, Grid } from "@mui/material";
import React, { useEffect } from "react";
import {
  HeadText,
  TextContext,
  ContactItem,
  TileContactItem,
} from "../lui/lixmaterial";
import { motion } from "framer-motion";
import { WhatsApp } from "@mui/icons-material";

const ContactPage = ({ data, tile }: { data: string; tile?: boolean }) => {
  const { heading, cta, details } = data.contact ?? "";

  useEffect(() => {
    console.log("data", details);
    console.log("type", typeof details);
  });

  if (tile) {
    return (
      <Box
        className=""
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          padding: "0 0 8px",
        }}
      >
        <Box
          className=""
          sx={{ display: "flex", flexDirection: "column", gap: "8px", p: 2 }}
        >
          <HeadText center fs={18} text={"Contacts"} />
          <TextContext center text={heading} />
          <Box
            className=""
            sx={{ padding: "8px 0px ", borderBottom: "1px solid" }}
          >
            <Typography sx={{ fontSize: "10px", lineHeight: 1 }}>
              {cta}
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          className="center-items"
          sx={{ p: 1 }}
          direction={"row"}
          spacing={2}
          columns={2}
        >
          <TileContactItem data={details} />
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box loading="lazy" sx={{ p: 1, padding:'0 0 100px' }} className="fh">
        <Box
          className=""
          sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <HeadText center fs={18} text={"Contacts Us"} />
          <TextContext center text={heading} />
          <Box
            className="center-items"
            sx={{ padding: "8px 0px ", borderBottom: "1px solid" }}
          >
            <Typography
              className="center-self "
              sx={{
                fontSize: "10px",
                lineHeight: 1,
                width: "80%",
                textAlign: "center",
              }}
            >
              {cta}
            </Typography>
          </Box>
        </Box>
        <Stack
          className="center-items"
          direction={{ xs: "column", sm: "row" }}
          sx={{
            p: 2,
            flexWrap: "wrap !important",
            justifyContent: "space-between",
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr 1fr" },
            gap:1
          }}
          spacing={2}
        >
          {details.map((item, i) => (
            <motion.div
              className=""
              key={1}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 * i }}
              viewport={{ once: true }}
            >
              <ContactItem
                name={item.name}
                text={item.action}
                link={item.url}
                linkTo={item.linkTo}
              />
            </motion.div>
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
