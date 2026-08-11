import react, { useState, useEffect, useRef } from "react";
import endPointData from "./_endpoint.json";
import sharp from "sharp";
import { appCache } from "./cache";

//glob all images/vids
const module = import.meta.glob('@/assets/images/**/*[".mp4", ".webp"]', {
  eager: true,
  import: "default",
});

const processAssets = async () => {
  const cleaned = Object.keys(module as {}).reduce((acc, path) => {
    const parts = path.split("/");
    const category = parts[4];
    const service = parts[5];
    const name = parts[7].split(".")[0]; 
    const ext = parts[7].split(".")[1]; 
    const src = module[path];
    const id = crypto.randomUUID();

    if (!acc[category]) acc[category] = {};
    if (!acc[category][service]) acc[category][service] = [];
    acc[category][service].push({ id, name, src, ext });

    return acc;
  }, {});
  return {
    ...endPointData,
    services: cleaned,
  };
};

export const useEndpointData = async () => {
  console.log("Loading Data")
  if (appCache.endpoint){ 
    console.log("Loading Cach data");
    return appCache.endpoint
  };

  //await new Promise((res) => setTimeout(res, 0));
  const data = await processAssets();
  appCache.endpoint = data;
  console.log("data is sent")
  return data;
};

/**
 *   const catchRef =  useRef<any>(null)
  const getData = async()=>{
    if(catchRef.current){
      console.log("Using catchRef data!")
      return catchRef.current
    }

    //else if ref no data
    console.log("Loading endpoin data");
    const data = await processAssets()
    catchRef.current = data
    return data
  }
  return { getData };
 */
/**
 * if (appCache.endpoint) return appCache.endpoint;

  await new Promise((res) => setTimeout(res, 0));
  const data = await processAssets();
  appCache.endpoint = data;
  return data;
 */