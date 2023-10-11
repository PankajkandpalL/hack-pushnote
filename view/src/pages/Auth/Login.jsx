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
import { Link, useNavigate } from "react-router-dom";
import { InputIcon } from "../../components/global/Input";
import { useState } from "react";
import axios from "axios";

export function Login() {
  const input = [
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
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const loginHandler = () => {
    axios
      .post("http://localhost:8080/v1/auth/user?session=login", userInfo)
      .then((d) => {
        alert("loged in successfully");
        navigate("/");
      })
      .catch((err) => alert(err));
    console.log(userInfo);
  };

  return (
    <div className="mt-20">
      <Typography className="text-center text-4xl font-extrabold ">
        Log in to your PushNote Account
      </Typography>
      <Card className="lg:w-[30%] md:w-[50%] w-[90%] m-auto mt-10">
        <Typography variant="md" className="mt-6 flex justify-center font-bold">
          Don&apos;t have an account?
          <Typography
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold underline text-blue-500"
          >
            <Link to={"/register"}> Sign up</Link>
          </Typography>
        </Typography>
        <CardBody className="flex flex-col gap-4 ">
          {/* <Input label="Email" size="lg" />
          <Input label="Password" size="lg" /> */}
          {input.map((e) => {
            return (
              <InputIcon
                label={e.label}
                className=""
                cb={inputHandler}
                icon={e.icon}
                userInfo={"email"}
              />
            );
          })}
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            className="p-4"
            color="green"
            fullWidth
            onClick={loginHandler}
          >
            Sign In
          </Button>
          <Typography className="text-center mt-5">
            Other ways to log in
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
