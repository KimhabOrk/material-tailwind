import { Tooltip, IconButton } from "@material-tailwind/react/dist";
import { Home, Plus, SelectFace3d, Settings } from "iconoir-react";

export function SpeedDialPlacement() {
  return (
    <div className="relative w-full h-80">
      <div className="absolute bottom-0 right-0">
        <Tooltip interactive offset={4} placement="top">
          <Tooltip.Trigger as={IconButton} isCircular>
            <Plus className="h-[18px] w-[18px] transition-transform group-data-[open=true]:rotate-45" />
          </Tooltip.Trigger>
          <Tooltip.Content className="flex flex-col gap-1 bg-transparent shadow-none">
            <Tooltip placement="left">
              <Tooltip.Trigger as={IconButton} isCircular color="secondary">
                <Home className="h-[18px] w-[18px]" />
              </Tooltip.Trigger>
              <Tooltip.Content>
                Home
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip>
            <Tooltip placement="left">
              <Tooltip.Trigger as={IconButton} isCircular color="secondary">
                <Settings className="h-[18px] w-[18px]" />
              </Tooltip.Trigger>
              <Tooltip.Content>
                Settings
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip>
            <Tooltip placement="left">
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
      </div>
      <div className="absolute bottom-0 left-0">
        <Tooltip interactive offset={4} placement="right">
          <Tooltip.Trigger as={IconButton} isCircular>
            <Plus className="h-[18px] w-[18px] transition-transform group-data-[open=true]:rotate-45" />
          </Tooltip.Trigger>
          <Tooltip.Content className="flex gap-1 bg-transparent shadow-none">
            <Tooltip>
              <Tooltip.Trigger as={IconButton} isCircular color="secondary">
                <Home className="h-[18px] w-[18px]" />
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
      </div>
      <div className="absolute top-0 left-0">
        <Tooltip interactive offset={4} placement="bottom">
          <Tooltip.Trigger as={IconButton} isCircular>
            <Plus className="h-[18px] w-[18px] transition-transform group-data-[open=true]:rotate-45" />
          </Tooltip.Trigger>
          <Tooltip.Content className="flex flex-col gap-1 bg-transparent shadow-none">
            <Tooltip placement="left">
              <Tooltip.Trigger as={IconButton} isCircular color="secondary">
                <Home className="h-[18px] w-[18px]" />
              </Tooltip.Trigger>
              <Tooltip.Content>
                Home
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip>
            <Tooltip placement="left">
              <Tooltip.Trigger as={IconButton} isCircular color="secondary">
                <Settings className="h-[18px] w-[18px]" />
              </Tooltip.Trigger>
              <Tooltip.Content>
                Settings
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip>
            <Tooltip placement="left">
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
      </div>
      <div className="absolute top-0 right-0">
        <Tooltip interactive offset={4} placement="bottom">
          <Tooltip.Trigger as={IconButton} isCircular>
            <Plus className="h-[18px] w-[18px] transition-transform group-data-[open=true]:rotate-45" />
          </Tooltip.Trigger>
          <Tooltip.Content className="flex flex-col gap-1 bg-transparent shadow-none">
            <Tooltip placement="right">
              <Tooltip.Trigger as={IconButton} isCircular color="secondary">
                <Home className="h-[18px] w-[18px]" />
              </Tooltip.Trigger>
              <Tooltip.Content>
                Home
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip>
            <Tooltip placement="right">
              <Tooltip.Trigger as={IconButton} isCircular color="secondary">
                <Settings className="h-[18px] w-[18px]" />
              </Tooltip.Trigger>
              <Tooltip.Content>
                Settings
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip>
            <Tooltip placement="right">
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
      </div>
    </div>
  );
}