import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import "./App.css";
import assets from "../appdata/endpoint";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";
import GuardError from "./scripts/guardError";

const App = () => {
  return (
    <GuardError>
      <Container className="p-rel vh" disableGutters>
        <RouterProvider router={appRouter} />
      </Container>
    </GuardError>
  );
};

export default App;
