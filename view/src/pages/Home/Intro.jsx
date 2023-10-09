import React from "react";
import { Button } from "../../components/global/Button";

export const Intro = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1  grid-cols-1 mt-20 ">
      <div className="w-[80%] flex flex-col gap-5 m-auto">
        <div className="text-6xl font-bold ">Plan less, do more</div>
        <div className="text-4xl ">
          Project management software, code management, bug tracking, and more
        </div>
        <div>
          <Button title={"Try Now"} />
        </div>
      </div>
      <div className="w-[80%] flex flex-col gap-5 m-auto">
        <img
          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/50d4c417-efac-4783-9f9b-1fdbb89d6037_refferal_header.png"
          alt=""
        />
      </div>
    </div>
  );
};
