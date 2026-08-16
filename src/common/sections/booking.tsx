import React, { useState, useEffect } from "react";
import { HeadText, MyInput, TextContext, TextIcon } from "../lui/lixmaterial";
import { Box, Dialog, TextField } from "@mui/material";
import { Close, Send } from "@mui/icons-material";
import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import MessagePage from "../lui/success";

const Booking = () => {
  const data = useOutletContext()
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const number = data.contact.details[0].linkTo ?? "";
  const [onSubmit, setOnSubmit] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const location = formData.get("location");
    const date = formData.get("date");
    const message = formData.get("message");

    const text = `Booking Message!%0AMy name is ${name}Email:${email}%0AEvent Location:${location}%0ADate and Time:${date}%0AMessage:${message}`;
    const url = `http://wa.me/${number}?text=${text}`;
    setFormData((prev) => ({ ...prev, name, email, location, date, message }));
    setOnSubmit(!onSubmit); // to open success page
    window.open(url, "_none");
  };



  if (onSubmit) return <MessagePage message={formData} />;
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
          p: 1,
        },

        backdropFilter: "blur(2px)",
      }}
    >
      <Box className=" fh">
        <Box
          className=""
          sx={{
            height: 100,
            display: "flex",
            flexFlow: "column",
            justifyContent: "space-between",
          }}
        >
          <Box className=" right">
            <Close
              onClick={() => {
                setOpen(!open);
                navigate("/");
              }}
            />
          </Box>
          <Box className="">
            <HeadText text="Booking Service" center fs={24} />
          </Box>
          <Box className="">
            <TextContext center text="Fill the Booking Form!" />
          </Box>
        </Box>
        <Box
          className="center-items"
          sx={{ p: 2, height: "70vh", color: "text.secondary" }}
        >
          <Box
            className=""
            onSubmit={handleFormSubmit}
            component={"form"}
            sx={{
              mx: "auto",
              boxShadow: 2,
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              p: 2,
              borderRadius: "12px",
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
              className="center-items"
              name="location"
              placeholder="Event Location"
              required
              sx={{
                height: "32px",
                width: "49%",
                borderRadius: "24px",
                border: "1px solid #12121260 !important",
              }}
            />
            <Box
              component={TextField}
              className="center-items"
              name="date"
              type="datetime-local"
              required
              sx={{
                height: "32px",
                width: "46%",
                borderRadius: "24px",
                border: "1px solid #12121260 !important",
              }}
            />

            <Box
              component={TextField}
              className="center-items"
              fullWidth
              //label="Message"
              placeholder="Enter Message"
              multiline
              name="message"
              sx={{
                minHeight: 100,
                width: "100%",
                borderRadius: "16px",
                border: "1px solid #12121260 !important",
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

export default Booking;

/**
 *   <TextField
              className=""
              fullWidth
              label="Enter Name"
              name="name"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Event Location"
              name="location"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Select Date"
              name="date"
              required
              type="datetime-local"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
 */
