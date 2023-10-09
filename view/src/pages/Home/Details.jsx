import React from "react";
import { CarouselDefault } from "./Carousel";

export const Details = () => {
  return (
    <div className="Lg:w-[50%] md:w-[70%] w-[90%] m-auto flex   flex-col h-full gap-20">
      <div className="text-3xl lg:text-5xl md:text-4xl  text-center">
        The all-in-one collaboration tool for creators.
        <p className="text-xl">
          Backlog frees you up to focus on what matters most.
        </p>
      </div>
      <div className="mt-5 w-full h-full">
        {/* <img
          className="m-auto"
          src="https://nulab.com/static/8c1bca2d1f957f388d979c416d52c090/96943/img_backlog_main-slide1.webp"
          alt=""
        /> */}
        {/* <Carousel /> */}
        <CarouselDefault />
      </div>
    </div>
  );
};
