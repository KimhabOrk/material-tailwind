import {
  Dialog,
  Button,
  Input,
  Checkbox,
  Typography,
  IconButton,
} from "@material-tailwind/react/dist";
import { Xmark } from "iconoir-react";

export function DialogWithForm() {
  return (
    <Dialog size="sm">
      <Dialog.Trigger as={Button}>Sign In</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content>
          <Dialog.DismissTrigger
            as={IconButton}
            size="sm"
            variant="ghost"
            isCircular
            className="absolute right-2 top-2"
          >
            <Xmark className="h-5 w-5" />
          </Dialog.DismissTrigger>
          <Typography type="h4" className="mb-2">
            Sign In
          </Typography>
          <Typography className="text-gray-600">
            Enter your email and password to Sign In.
          </Typography>
          <form action="#" className="mt-6">
            <Input className="mb-4 mt-2 space-y-1.5">
              <Typography
                as="label"
                htmlFor="email"
                type="small"
                color="primary"
                className="font-semibold"
              >
                Email
              </Typography>
              <Input.Field
                id="email"
                type="email"
                placeholder="someone@example.com"
              />
            </Input>
            <Input className="mb-4 space-y-1.5">
              <Typography
                as="label"
                htmlFor="password"
                type="small"
                color="primary"
                className="font-semibold"
              >
                Password
              </Typography>
              <Input.Field
                id="password"
                type="password"
                placeholder="************"
              />
            </Input>
            <div className="mb-6 flex items-center gap-2">
              <Checkbox id="remember" />
              <Typography
                as="label"
                htmlFor="remember"
                className="text-gray-500"
              >
                Remember Me
              </Typography>
            </div>
            <Button isFullWidth>Sign In</Button>
          </form>
          <Typography
            type="small"
            className="mb-2 mt-3 flex items-center justify-center gap-1"
          >
            Don't have an account?
            <Typography type="small" as="a" href="#" className="font-bold">
              Sign up
            </Typography>
          </Typography>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}