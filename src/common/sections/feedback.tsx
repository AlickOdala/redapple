import React, { useState, useEffect } from "react";
import { HeadText, MyInput, TextContext, TextIcon } from "../lui/lixmaterial";
import { Box, Dialog, TextField } from "@mui/material";
import { Close, Send } from "@mui/icons-material";
import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import MessagePage from "../lui/success";

const Feedback = () => {
  const data = useOutletContext()
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [onSubmit, setOnSubmit] = useState(false);

  const number = data.contact.details[0].linkTo ?? "";
  const feedback = data.feedback;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const text = `Booking Message!%0AMy name is ${name}Email:${email}%0AMessage:${message}`;
    const url = `http://wa.me/${number}?text=${text}`;
    setFormData((prev) => ({ ...prev, name, email, message }));
    window.open(url, "_nune");
    setOnSubmit(true);
  };
  if (onSubmit === true) return <MessagePage message={formData} />;
  return (
    <Dialog
      open={!open}
      fullScreen
      sx={{
        "& .MuiDialog-paper": {
          height: "93%",
          bottom: 0,
          position: "absolute",
          borderRadius: "24px 24px 0 0",
          p: 2,
        },

        backdropFilter: "blur(2px)",
      }}
    >
      <Box
        className="fh "
        sx={{ gap: 4, display: "flex", flexFlow: "column" }}
      >
        <Box
          className=""
          sx={{
            height: "auto",
            display: "flex",
            flexFlow: "column",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box className="center-items right ">
            <Close
              onClick={() => {
                setOpen(!open);
                navigate("/");
              }}
            />
          </Box>
          <Box className="">
            <HeadText text="Send Feedback!" center  />
          </Box>
          <Box
            className="center-self"
            sx={{ display: "flex", flexFlow: "column", gap: 2 }}
          >
            <TextContext center text={feedback} />
            <TextContext center text="Fill the Booking Form!" />
          </Box>
        </Box>
        <Box
          className="center-items "
          sx={{height: "auto", color: "text.secondary" }}
        >
          <Box
            className=""
            onSubmit={handleFormSubmit}
            component={"form"}
            
            sx={{
              mx: "auto",
              boxShadow: 3,
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              p: 2,
              borderRadius: "12px",
              color:"text.secondary"
            }}
          >
            <Box
              component={TextField}
              className="center-items"
              placeholder="Enter Name"
              name="name"
              required
              sx={{
                height: "32px",
                width: "100%",
                borderRadius: "24px",
                border: "1px solid #12121260 !important",
                mb: 2,
              }}
            />
            <Box
              placeholder="Enter Email ...@gmail.com"
              className="center-items"
              name="email"
              type="email"
              component={TextField}
              required
              sx={{
                height: "32px",
                width: "100%",
                borderRadius: "24px",
                border: "1px solid #12121260 !important",
                color: "text.secondary",
              }}
            />

            <Box
              component={TextField}
              className="center-items p-rel"
              fullWidth
              placeholder="Enter Message"
              multiline
              name="message"
              sx={{
                minHeight: 100,
                width: "100%",
                borderRadius: "16px",
                border: "1px solid #12121260 !important",
                padding: "0 !important",
              }}
            />

            <Box
              className=" center-items p-rel"
              sx={{ height: "40px", width: "100%", p: 1, color: "grey.200" }}
            >
              <Box className=" " sx={{ width: "90px" }}>
                <TextIcon
                  type="submit"
                  icon={<Send sx={{ transform: "scale(0.8)" }} />}
                  text={"Send"}
                  className="center-items"
                  rootProp={{
                    height: "32px",
                    borderRadius: "50px",
                    border: "1px solid #12121260",
                    boxshadow: 2,
                  }}
                  textProp={{ fontWeight: "bolder", fontSize: "12px" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Feedback;
