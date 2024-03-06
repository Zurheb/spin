import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 mx-auto">
      <Typography as="li" variant="h6" className="p-1  font-normal">
        <a href="/about" className="flex items-center">
          About
        </a>
      </Typography>

      <Typography as="li" variant="h6" className="p-1 font-normal">
        <a href="/documentation/getting-started" className="flex items-center">
          Documentation
        </a>
      </Typography>

      <Typography as="li" variant="h6" className="p-1 font-normal">
        <a href="/components/color" className="flex items-center">
          Components
        </a>
      </Typography>
    </ul>
  );

  return (
    <header className="max-w-[1600px] mx-auto my-0 sticky top-0  z-10">
      <div className="max-h-[768px] bg-black  ">
        <Navbar className=" h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-black">
          <div className="flex items-center justify-between ">
            <div className="flex gap-24">
              <Typography
                as="a"
                href="/"
                className="mr-4 cursor-pointer py-1.5 font-medium"
              >
                <img
                  className="w-auto h-auto max-h-4 lg:max-h-6"
                  src="https://themewagon.gitlab.io/spin/assets/img/logos/spin_logo.png"
                  alt=""
                />
              </Typography>

              <div className="hidden lg:flex items-center gap-4">{navList}</div>
            </div>
            <div className="flex items-center gap-4 lg:hidden">
              <IconButton
                variant="text"
                className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
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
            <div className="hidden lg:flex items-center gap-5">
              <Button
                variant="text"
                className="text-white bg-blue-gray-900 hover:bg-yellow-600"
              >
                <span>Subscribe</span>
              </Button>
              <Button
                variant="text"
                className="text-white bg-blue-gray-900 hover:bg-blue-500"
              >
                <span>Get started-it's free</span>
              </Button>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className=" grid md:grid-cols-2 items-center  gap-3">
              <Button
                fullWidth
                variant="text"
                size="sm"
                className="text-white  hover:bg-yellow-600 bg-blue-gray-900"
              >
                <span>Subscribe</span>
              </Button>
              <Button
                fullWidth
                variant="text"
                size="sm"
                className="text-white  hover:bg-blue-500 bg-blue-gray-900"
              >
                <span>Get started-it's free</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </div>
    </header>
  );
}
