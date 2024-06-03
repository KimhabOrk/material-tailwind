import { Tooltip, IconButton } from "@material-tailwind/react";
import { HomeSimple, Plus, SelectFace3d, Settings } from "iconoir-react";

export function SpeedDialHorizontal() {
  return (
    <Tooltip interactive offset={0} placement="right">
      <Tooltip.Trigger as={IconButton} isCircular>
        <Plus className="h-[18px] w-[18px] transition-transform group-data-[open=true]:rotate-45" />
      </Tooltip.Trigger>
      <Tooltip.Content className="flex gap-1 bg-transparent shadow-none dark:bg-transparent">
        <Tooltip>
          <Tooltip.Trigger as={IconButton} isCircular color="secondary">
            <HomeSimple className="h-[18px] w-[18px]" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Home
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger as={IconButton} isCircular color="secondary">
            <Settings className="h-[18px] w-[18px]" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Settings
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger as={IconButton} isCircular color="secondary">
            <SelectFace3d className="h-[18px] w-[18px]" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Dashboard
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Tooltip.Content>
    </Tooltip>
  );
}
