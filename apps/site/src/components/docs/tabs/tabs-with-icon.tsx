import { Tabs } from "@material-tailwind/react/dist";
import { SelectFace3d, ProfileCircle, Settings } from "iconoir-react";

export function TabsWithIcon() {
  return (
    <Tabs defaultValue="dashboard">
      <Tabs.List className="w-full">
        <Tabs.Trigger className="w-full" value="dashboard">
          <SelectFace3d className="mr-2 h-5 w-5" />
          Dashboard
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="profile">
          <ProfileCircle className="mr-2 h-5 w-5" />
          User Profile
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="settings">
          <Settings className="mr-2 h-5 w-5" />
          Settings
        </Tabs.Trigger>
        <Tabs.TriggerIndicator />
      </Tabs.List>
      <Tabs.Panel value="dashboard">
        It really matters and then like it really doesn't matter. What matters
        is the people who are sparked by it. And the people who are like
        offended by it, it doesn't matter.
      </Tabs.Panel>
      <Tabs.Panel value="profile">
        Because it's about motivating the doers. Because I'm here to follow my
        dreams and inspire other people to follow their dreams, too.
      </Tabs.Panel>
      <Tabs.Panel value="settings">
        We're not always in the position that we want to be at. We're constantly
        growing. We're constantly making mistakes. We're constantly trying to
        express ourselves and actualize our dreams.
      </Tabs.Panel>
    </Tabs>
  );
}