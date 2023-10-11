import React from "react";
import { InputIcon } from "../../components/global/Input";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const UserInfo = ({ cb, inputHandler, value }) => {
  console.log(value);
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

  return (
    <Card className="lg:w-[40%] md:w-[70%] w-[100%] m-auto mt-10">
      <Typography variant="md" className="mt-6 flex justify-center font-bold">
        Don&apos;t have an account?
        <Typography
          href="#signup"
          variant="small"
          color="blue-gray"
          className="ml-1 font-bold underline text-blue-500"
        >
          <Link to={"/login"}> log in </Link>
        </Typography>
      </Typography>
      <CardBody className="flex flex-col gap-4 ">
        {/* <Input label="Email" size="lg" />
          <Input label="Password" size="lg" /> */}
        {input.map((e, i) => {
          return (
            <InputIcon
              label={e.label}
              className=""
              cb={inputHandler}
              icon={e.icon}
              userInfo={value}
            />
          );
        })}
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          variant="gradient"
          className="p-4"
          color="green"
          fullWidth
          onClick={() => cb()}
        >
          next
        </Button>
        <Typography className="text-center mt-5">
          Other ways to signup
        </Typography>
      </CardFooter>
    </Card>
  );
};
