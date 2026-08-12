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
  LuiText,
  Section,
} from "../../common/lui/material";
import { ArrowBackRounded, Send } from "@mui/icons-material";
import RedAppleName from "../../common/lui/redapplename";

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
    <Box
      className=""
      sx={{ pt: !disableLocation && 10, px: !disableLocation && 2 }}
    >
      <Box className="">
        <ArrowBackRounded onClick={() => navigate("/")} />
      </Box>

      <LuiHeadText text={!disableLocation ? heading : head} />
      <LuiText text={!disableLocation ? cta : subhead} />

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
          <LuiButton text={loading ? "sending..." : "Send Now"} type="submit" />
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
            <LuiText text={"We have our office in Blantyre, Kachere"} center />
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
  );
};
LuiCardMedia;
export default ContactPage;

/**
 *{details.map((item: string, i: number) => (
            <ContactItem
              index={i}
              name={item.name}
              text={item.action}
              link={item.url}
              linkTo={item.linkTo}
            />
          ))}
 */
/**<Box
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
 */
