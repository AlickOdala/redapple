import {
  Box,
  Typography,
  Stack,
  Grid,
  Toolbar,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TextContext,
  ContactItem,
  TileContactItem,
  HeadText,
} from "../../common/lui/lixmaterial";
import { useNavigate, useNavigation, useOutletContext } from "react-router-dom";
import bgImage from "../../assets/webuse/homebg/bg1.webp";
import {
  LuiButton,
  LuiCard,
  LuiCardMedia,
  LuiContactButton,
  LuiHeadText,
  LuiNavigation,
  LuiText,
  Section,
} from "../../common/lui/material";
import { ArrowBackRounded, Send } from "@mui/icons-material";
import RedAppleName from "../../common/lui/redapplename";
import { VibrationX, ZInMotion } from "../../common/lui/lui-motion";

interface ContactProps {
  data: Record<string, string[]>;
}

const info = {
  head: "Let's Tell Your Story Together",
  subhead:
    "Have an idea, a project, or just a story to share? We're here to listen, create, and bring it to life.",
};

const ContactPage = ({ disableLocation }: { disableLocation?: boolean }) => {
  const data = useOutletContext<ContactProps>();
  const { heading, cta, details } = data.contact ?? "";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, type: "success", msg: "" });

  const { head, subhead } = info;

  const hundleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new formData(e.target);
    formData.append("access_key", "Your_Access_keys_here");
    formData.append(
      "subject",
      "New Redapple Inquiry: " + formData.get("service"),
    );
    formData.append("form_name", "Redapple Website");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (results.success) {
      setToast({
        open: true,
        type: "success",
        msg: `Message sent We 'll get back to you on your ${formData.get("phone")}`,
      });
      e.target.reset();
    } else {
      setToast({
        open: true,
        type: "error",
        msg: "Something went wrong, Try making call direct.",
      });
    }
    setLoading(false);
  };

  return (
    <ZInMotion>
      <Box
        className=""
        sx={{
          pt: !disableLocation && 10,
          px: !disableLocation && 2,
          minHeight: { xs: "100vh" },
          pb: 4,
        }}
      >
        {!disableLocation && (<LuiNavigation action="back" link="/" />)}
        
        <Box sx={{ display: "flex", flexFlow: "column", gap: 4, py: 2 }}>
          <VibrationX>
            <LuiHeadText text={!disableLocation ? heading : head} />
          </VibrationX>
          <LuiText text={!disableLocation ? cta : subhead} />
        </Box>

        <Box component="form" className="" onSubmit={hundleSubmit}>
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />
          <Grid
            container
            //sx={{ aspectRatio: { xs: 3 / 5 } }}
            spacing={1}
          >
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ height: "fit-content", borderBottom: "1px solid grey" }}
            >
              <LuiHeadText text="Enter Email" fx={14} fm={1.5} />
              <TextField
                placeholder="@gmail.com"
                type="email"
                fullWidth
                name="email"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ height: "fit-content", borderBottom: "1px solid grey" }}
            >
              <LuiHeadText text="Your Phone Number" fx={14} fm={1.5} />
              <TextField
                placeholder="+265888000000"
                type="text"
                fullWidth
                name="phone"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{ xs: 12 }}
              sx={{ height: "fit-content", borderBottom: "1px solid grey" }}
            >
              <LuiHeadText text="Company or Your Name" fx={14} fm={1.5} />
              <TextField
                placeholder="Redapple / Alex"
                type="text"
                fullWidth
                name="name"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{ xs: 12 }}
              sx={{ height: "fit-content", borderBottom: "1px solid grey" }}
            >
              <LuiHeadText text="What is Required Service" fx={14} fm={1.5} />
              <TextField
                placeholder="eg. Documentary.... Wedding"
                type="text"
                fullWidth
                name="service"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{ xs: 6 }}
              sx={{ height: "fit-content", borderBottom: "1px solid grey" }}
            >
              <LuiHeadText text="Location" fx={14} fm={1.5} />
              <TextField
                placeholder="eg. Blanytre-Golden Hills"
                type="text"
                fullWidth
                name="location"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{ xs: 6 }}
              sx={{ height: "fit-content", borderBottom: "1px solid grey" }}
            >
              <LuiHeadText text="Pick Date" fx={14} fm={1.5} />
              <TextField
                placeholder="yy/mm/dd"
                name="date"
                fullWidth
                type="datetime-local"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{ xs: 12 }}
              sx={{
                height: "fit-content",
                borderBottom: "1px solid grey",
                boxSizing: "content-box",
              }}
            >
              <LuiHeadText text="Leave Addional Message" fx={14} fm={1.5} />
              <TextField
                className=""
                placeholder="What are you planning?"
                fullWidth
                multiline
                rows={4}
                sx={{ mt: 2 }}
              />
            </Grid>
          </Grid>
          <Box className="" sx={{ py: 2 }}>
            <LuiButton
              text={loading ? "sending..." : "Send Now"}
              type="submit"
            />
          </Box>
          <Snackbar
            open={toast.open}
            autoHideDuration={4000}
            onClose={() => setToast({ ...toast, open: false })}
          >
            <Alert severity={toast.type}>{toast.msg}</Alert>
          </Snackbar>
        </Box>
        <LuiHeadText text={"Call or Chat With Us"} />
        <LuiText text={"Click the buttons for direct contact"} />
        <Grid container className="" sx={{ py: 2 }} spacing={2} columns={2}>
          {details.slice(0, 2).map((item, i) => (
            <LuiContactButton item={item} i={i} />
          ))}
        </Grid>
        <LuiHeadText text=" find RedApple on Social media!" fx={12} />
        {!disableLocation ? (
          <LuiCard ratio={3 / 4.5}>
            <>
              <LuiHeadText text="Our Office Location" center />
              <LuiText
                text={"We have our office in Blantyre, Kachere"}
                center
              />
              <LuiCardMedia image="/studio/studio.webp" />
            </>
          </LuiCard>
        ) : (
          <Box className="" sx={{ py: 2 }}>
            <LuiButton
              text="View More"
              onClick={() => navigate("/contact")}
              center
            />
          </Box>
        )}
      </Box>
    </ZInMotion>
  );
};

export default ContactPage;

/**
 * <Box className="" sx={{ py: 2 }}>
         <ArrowBackRounded onClick={() => navigate("/")} />
       </Box>
       <Box sx={{ display: "flex", flexFlow: "column", gap: 4, px: 3, py: 2 }}>
         <LuiHeadText text={head} />
         <LuiText text={subhead} />
         <Stack direction={"row"} sx={{ gap: 2 }}>
           <LuiButton text="Contact" onClick={() => navigate("/contact")} />
           <LuiButton
             text="Gallery"
             onClick={() => navigate("/gallery")}
             bgcolor="transparent"
             txtcolor="black"
           />
         </Stack>
         <LuiHeadText text={"Our Resent Stories"} />
         <LuiText
           text={
             "We are Trusted by Big instutions , brand, companies and even solo cliants. View our vived stories."
           }
         />
       </Box>
 */
