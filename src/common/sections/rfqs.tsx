import React, { useEffect } from "react";
import { LuiCollapse, LuiHeadText, LuiText, Section } from "../lui/material";
import { useOutletContext } from "react-router-dom";

const info = {
  head: "Frequently Asked Questions",
  subhead:
    "Quick answers about our services, booking, pricing, and how we work.",
};

const RFQs = () => {
  const data = useOutletContext();
  const fqs = data.faq;

  useEffect(() => {
    console.log("fqs.question", fqs.question);
  });

  const { head, subhead } = info;
  return (
    <Section text="Frequent Questions">
      <>
        <LuiHeadText text={head} />
        <LuiText text={subhead} />
        <LuiCollapse services={fqs.question} bgcolor="transparent" />
      </>
    </Section>
  );
};

export default RFQs;
