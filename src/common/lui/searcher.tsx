import { Box, Button, IconButton, Input, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { MyInput } from "./lixmaterial";

type BgType = "papar" | "default";

interface SearcherProps {
  setSearched?: Dispatch<SetStateAction<string>>;
  paper?: BgType;
}

const Searcher = ({ setSearched, paper }: SearcherProps) => {
  const [input, setInput] = useState("");



  return (
    <Stack
      className="debug"
      direction={"row"}
      sx={{
        borderRadius: "100px",
        height: "32px",
        bgcolor: `background.${paper}`,
        backdropFilter: "grayscale(90) blur(3px)",
      }}
    >
      <Box className="grow" sx={{ height: "100%" }}>
        <MyInput
          bgcolor={`background.${paper}`}
          inputType="text"
          use="Search here"
          value={input}
          onChange={(e) => {
            console.log("type", typeof e.target.value);
            setInput(e.target.value);
          }}
        />
      </Box>
      <Box
        className="p-re center-items"
        sx={{
          width: "40px",
          zIndex: 10,
          boxSizing: "border-box",
          padding: "0 !important",
        }}
      >
        <IconButton>
          <SearchIcon
            onClick={() => {
              //setSearched(input);
              setInput("");
            }}
          />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default Searcher;
