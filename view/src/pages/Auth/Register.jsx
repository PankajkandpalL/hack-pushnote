import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputIcon } from "../../components/global/Input";

export const Register = () => {
  const [user, setuser] = useState({
    username: null,
    email: null,
    password: null,
  });

  const input = [
    {
      label: "username",
      icon() {
        return (
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 14 18"
          >
            <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        );
      },
    },
    {
      label: "email",
      icon() {
        return (
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 10h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H17M1 10v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M1 10l2-9h12l2 9"
            />
          </svg>
        );
      },
    },
    {
      label: "password",
      icon() {
        return (
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
          </svg>
        );
      },
    },
  ];
  const userHandler = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  const submitHander = () => {
    console.log("user", user);
    setuser({
      username: null,
      email: null,
      password: null,
    });
  };
  return (
    <div className="w-[70%] text-center m-auto text-xl gap-10 flex flex-col mt-10 ">
      <div className="flex gap-4 flex-col w-[80%] m-auto">
        <div className="font-bold"> Free Plan</div>
        <h1 className="md:text-3xl font-bold lg:text-4xl  text-2xl">
          Create your new account and start using PushNote for free
        </h1>
        <div className=" font-bold text-xl">
          Already have a Account?
          <Link to={"/login"} className="text-blue-400 text-md underline">
            try to login PushNote
          </Link>{" "}
        </div>
      </div>
      <div className="flex m-auto gap-0">
        <div>
          <Button
            variant=""
            className="flex items-center  rounded-full bg-green-400 text-2xl"
            onClick={""}
            disabled={""}
          >
            1
          </Button>
        </div>
        <div className="m-auto">-----------</div>
        <div>
          <Button
            variant=""
            className="flex items-center  rounded-full  bg-blue-gray-100 text-2xl text-black "
            onClick={""}
            disabled={true}
          >
            2
          </Button>
        </div>
      </div>
      <div className="flex m-auto gap-10 text-sm">
        <div>Your Info</div>

        <div>Your Org's Info</div>
      </div>
      <div
        className=" flex flex-col gap-3 m-auto lg:w-[30%] md:w-[60%] 
       "
      >
        {input.map((e) => {
          return (
            <InputIcon label={e.label} className="" cb={""} icon={e.icon} />
          );
        })}

        <Button
          variant="filled"
          size="md"
          color="green"
          onClick={submitHander}
          className="inline-block w-[95%] m-auto"
        >
          <Link to={"/register"}>Next</Link>
        </Button>
      </div>
    </div>
  );
};
