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

export const OrgInfo = ({ cb, submit, value }) => {
  const input = [
    {
      label: "company name",
      icon() {
        return (
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 19"
          >
            <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
            <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
          </svg>
        );
      },
    },
  ];

  return (
    // <div className="flex flex-col gap-3">
    //   <div className="text-sm ">Add your company name</div>
    //   {input.map((e) => {
    //     return <InputIcon label={e.label} className="" cb={""} icon={e.icon} />;
    //   })}
    //   <div className="">
    //     <Checkbox
    //       label={
    //         <Typography
    //           color="blue-gray"
    //           className="flex   font-medium text-sm"
    //         >
    //           I agree with the terms & conditions
    //         </Typography>
    //       }
    //     />
    //   </div>
    // </div>
    <Card className="lg:w-[40%] md:w-[70%] w-[100%] m-auto mt-16">
      {/* <Typography variant="md" className="mt-6 flex justify-center font-bold">
        Don&apos;t have an account?
        <Typography
          href="#signup"
          variant="small"
          color="blue-gray"
          className="ml-1 font-bold underline text-blue-500"
        >
          <Link to={"/login"}> log in </Link>
        </Typography>
      </Typography> */}
      <Typography className="font-bold">Enter your Org name</Typography>
      <CardBody className="flex flex-col gap-4 ">
        {/* <Input label="Email" size="lg" />
        <Input label="Password" size="lg" /> */}
        {input.map((e) => {
          return (
            <InputIcon
              key={Math.random()}
              label={e.label}
              className=""
              cb={cb}
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
          onClick={() => submit()}
        >
          signup
        </Button>
      </CardFooter>
    </Card>
  );
};
