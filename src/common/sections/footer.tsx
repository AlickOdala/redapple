import { Box, Collapse, Container, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeadText, TextContext, TextIcon } from "../lui/lixmaterial";
Collapse;
const Footer = ({ data }: { data?: any }) => {
  const { feedback, faq } = data ?? "";
  useEffect(() => {});

  return (
    <Container
      className="p-rel"
      sx={{
        height: "60vh",
        bgcolor: "grey.200",
        color: "secondary.main",
        gap: "10px",
      }}
    >
      <Grid container className=" fh" spacing={2} sx={{ padding: "8% 0 0" }}>
        <Grid
          className=""
          size={{ xs: 12, sm: 4 }}
          sx={{ height: "20%", p: 1 }}
        >
          <Feedback feedback={feedback} />
        </Grid>
        <Grid
          className=""
          size={{ xs: 12, sm: 4 }}
          sx={{ height: "auto", p: 1, maxHeight: "fit-content !important" }}
        >
          <FQs faq={faq} />
        </Grid>
        <Grid
          className=" p-rel center-items"
          size={{ xs: 12 }}
          sx={{ height: "20%" }}
        >
          <Developer />
        </Grid>
      </Grid>
    </Container>
  );
};

const Feedback = ({ feedback }: { feedback?: any }) => {
  return (
    <Box
      className=""
      sx={{
        padding: "8px 0",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <HeadText fs={12} text={"FeedBack"} />
      <TextContext fs={9} text={feedback ?? ""} />
    </Box>
  );
};

const FQs = ({ faq }: { faq: string }) => {
  const [wide, setWide] = useState(false);
  const { question, cta } = faq ?? "";

  return (
    <Box className=" p-rel center-self" sx={{ padding: "8px 0" }}>
      <HeadText fs={12} text={"FQs"} />
      <Box className="p-rel">
        <TextContext fs={9} sx={{ padding: "8px 4px" }} text={cta} />
        <Typography></Typography>
        {(question ?? []).map((item) =>
          Object.entries(item).map(([key, value]) => (
            <Collapse
              in={wide}
              className=""
              sx={{
                padding: "0 i!mportant",
                margin: "0 i!mportant",
                gap: "2px",
              }}
              key={key}
            >
              <Box
                className=""
                sx={{
                  display: "flex",
                }}
              >
                <Box className="">
                  <Typography
                    sx={{
                      fontSize: "8px",
                      padding: "2px 4px",
                      bgcolor: "grey.50",
                      width: "14px",
                    }}
                  >
                    {key.toUpperCase()}
                  </Typography>
                </Box>
                <Box className="">
                  <Typography sx={{ fontSize: "8px", padding: "0 2px" }}>
                    {value}
                  </Typography>
                </Box>
              </Box>
            </Collapse>
          )),
        )}
      </Box>
      <Box
        className="debug p-rel"
        sx={{
          bgcolor: "secondary.main",
          color: "secondary.contrastText",
          fontSize: "9px",
          padding: "0 10px",
          fontWeight: "bold",
          borderRadius: "0 0 8px 8px ",
        }}
        onClick={() => setWide(!wide)}
      >
        {!wide ? "View All Questions and Response" : "Close"}
      </Box>
    </Box>
  );
};

const Developer = () => {
  const develperInfo = ["ABOUT DEVELOPER : LixMedia"];

  return (
    <Box
      className="red p-abs center-items"
      sx={{ bottom: 20, left: 16, width: "90%" }}
      onClick={() => ""}
    >
      <Box className=" " sx={{ bottom: 20, left: 16 }}>
        <TextContext center fs={7} text={develperInfo} />
        <TextContext center fs={7} text={"All Right reserved"} />
      </Box>
    </Box>
  );
};
export default Footer;
