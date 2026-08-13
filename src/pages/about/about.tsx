import { Box, Stack, Toolbar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  LuiButton,
  LuiCard,
  LuiCardMedia,
  LuiHeadText,
  LuiNavigation,
  LuiText,
  Section,
} from "../../common/lui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import RFQs from "../../common/sections/rfqs";

const AboutPage = () => {
  const data = useOutletContext();
  const { welcome, goals, coreValues } = data;
  const navigate = useNavigate();
  const [expand, setExpand] = useState(199);
  const [click, setClick] = useState(false);

  const info = {
    head: "The Story About Our Production.",
    team: [
      { name: "Mr Redapple", position: "CEO", img: "" },
      { name: "Mr Redapple", position: "CEO", img: "" },
      { name: "Mr Redapple", position: "CEO", img: "" },
    ],
  };

  const hundleExpand = () => {
    if (click === true) {
      setExpand(2000);
      setClick(!click);
    } else {
      setExpand(199);
      setClick(!click);
    }
  };

  const { head, team } = info;
  return (
    <Box className="" sx={{ pt: 10 }}>
      <LuiNavigation action={"back"} link={"/"} />
      <Box sx={{ display: "flex", flexFlow: "column", gap: 4, px: 2 }}>
        <LuiHeadText text={head} />
        <LuiText text={welcome} />
        <LuiButton text="Contact" onClick={() => navigate("/contact") } />
      </Box>

      <Section text="Our Goals">
        <Box>
          <LuiHeadText text={"Our Goals"} />
          <LuiText text={goals} />
        </Box>
      </Section>
      <Section text="Our Values">
        <Box>
          <LuiHeadText text={"Our Core Values"} />
          <LuiText text={coreValues} />
        </Box>
      </Section>

      <Section text="Team">
        <Box>
          <LuiHeadText
            text={"Meet Our Team, Big Minds Where Creativity Sink."}
          />
          <Box
            sx={{
              display: "flex",
              flexWrap: { sm: "wrap" },
              flexFlow: { xs: "column", sm: "row" },
            }}
          >
            {team.map((p) => (
              <LuiCardMedia ratio={3 / 3.2} details src={p} />
            ))}
          </Box>
        </Box>
      </Section>
      <RFQs />
    </Box>
  );
};

export default AboutPage;
