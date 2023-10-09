import React from "react";
import { Intro } from "./Intro";
import { Details } from "./Details";

export const Home = () => {
  return (
    <div className="flex flex-col gap-28 ">
      <Intro />
      <Details />
    </div>
  );
};
