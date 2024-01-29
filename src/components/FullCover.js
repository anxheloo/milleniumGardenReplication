import React from "react";

import component1Img from "../assets/Component-4-–-1-1536x320.jpg";
import component2Img from "../assets/Component-4-–-2-1536x320.jpg";
import { FullCoverItem } from "./FullCoverItem";

export const FullCover = () => {
  return (
    <section id="fullCover" className="hidden md:block ">
      <FullCoverItem
        componentImg={component1Img}
        text={"Hospitality"}
      ></FullCoverItem>

      <FullCoverItem
        componentImg={component2Img}
        text={"Entertainment"}
      ></FullCoverItem>
    </section>
  );
};
