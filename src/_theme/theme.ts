import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { BorderStyle, Palette } from "@mui/icons-material";
import { scale } from "framer-motion";


export const RedAppleTheme = createTheme({
  palette: {
    primary: {
      main: "#610101",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f1f1f1",
      contrastText: "#000000",
    },
    background: {
      default: "#fcf9f9",
      paper: "#e6e6e6",
    },
    text: {
      primary: "#610101",
      secondary: "#202020",
    },
    grey: {
      50: "#909090",
      100: "#606060",
      200: "#303030",
      300: "#121212",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          minWidth: "30px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000000",
          borderRadius: "50px",
          minWidth: "40px",
          height: "40px",
          margin: "0",
          padding: "10px",
          maxWidth: "100px",
          display: "inline-flex",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "none",
          "& .MuiButton-startIcon": {
            transform: "scale(0.9)",
            margin: "auto",
          },
        },
        contained: {},
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderStyle: "unset",
            maxHeight: "45px",
            height: "40px",
            minWidth: "100%",
            fontSize: "11px",
            flexGrow: "1",
            outline: "none",
          },
          "& .MuiInputBase-input": {
            borderRadius: "50px",
            bgcolor: "background.paper",
            height: "32px",
            padding: "5px 10px",
            fontSize: "10px",
            color: "text.secondary",
          },

          "& .MuiFormHelperText-root": {
            color: "text.secondary",
            fontSize: "8px",
            fontStyle: "italic",
            textAlign: "center",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "text.secondary",
            fontSize: "9px",
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          width: "100%",
          top: "0",
          left: "0",
          right: "0",
          minHeight: "100%",
          bottom: "0",
          display: "inline-flex",
        },
      },
    },
  },
});
