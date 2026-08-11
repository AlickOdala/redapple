import { Box, Paper, Typography, Dialog, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import {
  isRouteErrorResponse,
  Link,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { TextContext, TextIcon, HeadText } from "../common/lui/lixmaterial";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = "Oops! Error";
  let message = "Something went Wrong!";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "404-Page not found!";
      message = "The RedApple page does not found.";
    } else {
      title = `Error  ${error.status}`;
      message = error.statusText;
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <Dialog className=" fh center-items" fullScreen open>
      <Box
        className=" center-self fh"
        sx={{
          width: "100%",
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-around",
        }}
      >
        <Box className="" sx={{ height: 100 }}>
          <HeadText center text={"Oops! Error"} fs={24} />
        </Box>
        <Box className="" sx={{ height: 300 }}>
          <Box
            className="center-self center-items"
            sx={{
              padding: "16px !important",
              width: 230,
              borderRadius: 2,
              boxShadow: 3,
              aspectRatio: 1 / 1,
              display: "flex",
              gap: 4,
            }}
          >
            <Box className="">
              <HeadText text={title} center fs={18} />
            </Box>
            <TextContext text={message} center />
            <Typography sx={{ fontSize: "14px", padding: "0 4px" }}>
              Kindly return to home page! <br /> Thank You.
            </Typography>
          </Box>
        </Box>
        <Box className=" center-items" sx={{ height: 100 }}>
          <TextIcon
            onClick={() => navigate("/")}
            text="OK"
            className="center-item center-self "
            textProp={{
              fontWeight: "bolder",
              fontSize: "16px",
              textAlign: "centers",
            }}
            rootProp={{
              borderRadius: "100px",
              aspectRatio: 1 / 1,
              height: "40px",
              display: "flex",
              boxShadow: 4,
            }}
          />
        </Box>
      </Box>
    </Dialog>
  );
};

export default ErrorPage;
