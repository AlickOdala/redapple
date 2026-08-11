import react, { useState, useEffect } from "react";
import appdata from "./_endpoint.json";
import sharp from "sharp";

const module = import.meta.glob("@/assets/images/**/*.{webp, mp4}", {
  eager: true,
  import: "default",
});

export const EndPointData = Object.keys(module).reduce((acc, path) => {
  const parts: string[] = path.split("/");
  const category = parts[parts.length - 3];
  const service = parts[parts.length - 2];
  const name = parts.pop().split(".")[0] ?? "no File";
  const src = module[path];
  //const id = crypto.randomUUID();

  if (!acc[category]) {
    acc[category] = {};
  }

  if (!acc[category][service]) {
    acc[category][service] = [];
  }
  acc[category][service].push({ name, src });

  return acc;
}, {});

const assets = { ...appdata, ...(appdata.services = EndPointData) };

export default assets;
