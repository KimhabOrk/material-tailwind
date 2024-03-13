import {
  Popover,
  Button,
  Typography,
  Chip,
} from "@material-tailwind/react/dist";
import { CheckCircleSolid, StarSolid } from "iconoir-react";

export function PopoverWithDescription() {
  return (
    <Popover>
      <Popover.Trigger as={Button}>Repository Info</Popover.Trigger>
      <Popover.Content className="max-w-sm px-3.5 py-3">
        <div className="mb-1 flex items-center gap-3">
          <Typography
            as="a"
            href="#"
            type="h6"
            className="hover:text-info-main"
          >
            @material-tailwind
          </Typography>
          <Chip size="sm" variant="ghost">
            <Chip.Label>Public</Chip.Label>
          </Chip>
        </div>
        <Typography type="small" className="text-gray-600">
          @material-tailwind is an easy-to-use components library for Tailwind
          CSS and Material Design.
        </Typography>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="bg-info-main h-3 w-3 rounded-full" />
            <Typography type="small" className="text-gray-600">
              TypeScript
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            <StarSolid className="text-warning-main h-4 w-4" />
            <Typography type="small" className="text-gray-600">
              1,480
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircleSolid className="text-success-main h-4 w-4" />
            <Typography type="small" className="text-gray-600">
              Veritied
            </Typography>
          </div>
        </div>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  );
}