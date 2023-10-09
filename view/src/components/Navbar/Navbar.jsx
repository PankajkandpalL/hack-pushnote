import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navLinks = [
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/prices" },
  ];

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/features" className="flex items-center">
          features
        </Link>
      </Typography>{" "}
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/prices" className="flex items-center">
          prices
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="sticky p-3 w-[90]">
      <Navbar
        className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-2 lg:px-4 lg:py-2 p-1"
        fullWidth={true}
      >
        <div className="flex items-center justify-between text-blue-gray-900 w-[95%] m-auto">
          <Typography
            as="li"
            href="/"
            variant="lead"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <Link to={"/"}> PushNote</Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden   lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="md"
              color="green"
              className="inline-block"
            >
              <Link to={"/register"}>Try Now</Link>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
}
