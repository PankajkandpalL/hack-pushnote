import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

import { UserInfo } from "./UserInfo";
import { OrgInfo } from "./OrgInfo";
import { StepperWithContent } from "./Stepper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [next, setNext] = useState(false);

  const userHandler = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const [step, setStep] = useState(0);

  const nextHandler = () => {
    if (userInfo.username && userInfo.password && userInfo.email) {
      setStep(step + 1);
      setNext(true);
    } else {
      alert("some fields are missing");
    }
  };

  const submitHander = () => {
    console.log("signup clicked");

    axios
      .post("http://localhost:8080/v1/auth/user?session=register", {
        ...userInfo,
        repeatPassword: userInfo.password,
      })
      .then((d) => navigate("/login"));

    setUserInfo({
      username: "",
      email: "",
      password: "",
    });

    console.log(userInfo);
    // if (!next) {
    //   setNext(true);
    // } else {
    //   // console.log("user", user);
    //   // setuser({
    //   //   username: null,
    //   //   email: null,
    //   //   password: null,
    //   // });
    //   console.log("next page");
    // }
  };
  const inputHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const orgHander = (e) => {
    // console.log(e);
  };
  return (
    <div className="w-[70%] text-center m-auto text-xl gap-10 flex flex-col mt-10 ">
      <div className="flex gap-4 flex-col w-[80%] m-auto">
        <div className="font-bold"> Free Plan</div>
        <h1 className="md:text-3xl font-bold lg:text-4xl  text-2xl">
          Create your new account and start using PushNote for free
        </h1>
      </div>
      <div className="flex m-auto gap-0">
        <StepperWithContent step={step} cb={setNext} next={setStep} />
      </div>

      <div>
        {next ? (
          <OrgInfo value={userInfo} cb={orgHander} submit={submitHander} />
        ) : (
          <UserInfo
            cb={nextHandler}
            inputHandler={inputHandler}
            value={userInfo}
          />
        )}
      </div>
    </div>
  );
};
