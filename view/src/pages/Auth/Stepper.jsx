import React, { useEffect, useState } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

export function StepperWithContent({ step, cb, next }) {
  const [activeStep, setActiveStep] = React.useState(step);

  return (
    <div className="w-full  py-4 m-auto">
      <Stepper activeStep={step} className="flex gap-28">
        <Step
          onClick={() => {
            cb(false);
            next(step - 1);
          }}
        >
          <UserIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Your info
            </Typography>
          </div>
        </Step>

        <Step>
          <BuildingLibraryIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              your org's info
            </Typography>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}
