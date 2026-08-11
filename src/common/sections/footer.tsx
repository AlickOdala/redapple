import { Box, Collapse, Container, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeadText, TextContext, TextIcon } from "../lui/lixmaterial";
Collapse;
const Footer = ({ data }: { data?: any }) => {
  const { feedback, faq, location } = data ?? "";
;

  return (
    <Box
      className="p-rel"
      sx={{
        height: "80vh",
        bgcolor: "grey.200",
        color: "primary.contrastText",
        gap: "10px",
        px: 2,
      }}
    >
      <Grid container className=" fh" spacing={2} sx={{ padding: "8% 0 0" }}>
        <Grid className="" size={{ xs: 12, sm: 4 }} sx={{ height: "20%" }}>
          <Feedback feedback={feedback} />
        </Grid>
        <Grid
          className=""
          size={{ xs: 12, sm: 4 }}
          sx={{ height: "auto", maxHeight: "fit-content !important" }}
        >
          <FQs faq={faq} />
        </Grid>
        <Grid className=" p-rel" size={{ xs: 12 }} sx={{ height: "20%" }}>
          <Box className="">
            <Box className="">
              <HeadText
                fs={12}
                text={"Location"}
                color="primary.contrastText"
              />
            </Box>
            <Box
              className=""
              sx={{ display: "flex", flexWrap: "wrap", columnGap: 1 }}
            >
              {Object.values(location).map((item, i) => (
                <Typography key={i} sx={{ fontSize: "10px" }}>
                  {item},
                </Typography>
              ))}
            </Box>
          </Box>
          <Developer />
        </Grid>
      </Grid>
    </Box>
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
      <HeadText text={"FeedBack"} color="primary.contrastText" />
      <TextContext fs={12} text={feedback ?? ""} color="primary.contrastText" />
    </Box>
  );
};

const FQs = ({ faq }: { faq: string }) => {
  const [wide, setWide] = useState(false);
  const { question, cta } = faq ?? "";

  return (
    <Box className=" p-rel center-self" sx={{ padding: "8px 0" }}>
      <HeadText text={"FQs"} color="primary.contrastText" />
      <Box className="p-rel">
        <TextContext
          fs={12}
          sx={{ padding: "8px 4px" }}
          text={cta}
          color="primary.contrastText"
        />
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
                  <Typography sx={{ fontSize: "9px", padding: "0 2px" }}>
                    {value}
                  </Typography>
                </Box>
              </Box>
            </Collapse>
          )),
        )}
      </Box>
      <Box
        className=" p-rel"
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
        <TextContext
          center
          fs={8}
          text={develperInfo}
          color="primary.contrastText"
        />
        <TextContext
          center
          fs={9}
          text={"All Right reserved"}
          color="primary.contrastText"
        />
      </Box>
    </Box>
  );
};
export default Footer;
