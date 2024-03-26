import * as React from "react";
import { Timeline, Button, Typography } from "@material-tailwind/react/dist";
import { HomeSimple, UserCircle, Settings } from "iconoir-react";

export function StepperWithContent() {
  const [step, setStep] = React.useState(0);

  return (
    <div className="w-full">
      <Timeline
        mode="stepper"
        value={step}
        onChange={(val) => setStep(Number(val))}
      >
        <Timeline.Item disabled={step < 0} value={0} className="w-full">
          <Timeline.Header>
            <Timeline.Separator />
            <Timeline.Icon>
              <HomeSimple className="w-6 h-6" />
            </Timeline.Icon>
          </Timeline.Header>
          <div className="mt-4">
            <Typography type="h6">Step 1</Typography>
            <Typography type="small">Details about yout account.</Typography>
          </div>
        </Timeline.Item>
        <Timeline.Item disabled={step < 1} value={1} className="w-full">
          <Timeline.Header>
            <Timeline.Separator />
            <Timeline.Icon>
              <UserCircle className="w-6 h-6" />
            </Timeline.Icon>
          </Timeline.Header>
          <div className="pl-2 mt-4">
            <Typography type="h6">Step 2</Typography>
            <Typography type="small">Details about yout account.</Typography>
          </div>
        </Timeline.Item>
        <Timeline.Item disabled={step < 2} value={2} className="w-full">
          <Timeline.Header>
            <Timeline.Icon>
              <Settings className="w-6 h-6" />
            </Timeline.Icon>
          </Timeline.Header>
          <div className="pl-2 mt-4">
            <Typography type="h6">Step 3</Typography>
            <Typography type="small">Details about yout account.</Typography>
          </div>
        </Timeline.Item>
      </Timeline>

      <div className="flex justify-between w-full gap-4 mt-14">
        <Button disabled={step === 0} onClick={() => setStep(step - 1)}>
          Previous
        </Button>
        <Button
          variant="solid"
          disabled={step === 2}
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
