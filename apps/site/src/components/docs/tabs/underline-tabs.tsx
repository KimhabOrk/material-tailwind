import { Tabs } from "@material-tailwind/react/dist";

export function UnderlineTabs() {
  return (
    <Tabs defaultValue="html">
      <Tabs.List className="w-full rounded-none border-b border-secondary-dark bg-transparent py-0 dark:border-secondary-dm-main dark:bg-transparent">
        <Tabs.Trigger className="w-full" value="html">
          HTML
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="react">
          React
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="vue">
          Vue
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="angular">
          Angular
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="svelte">
          Svelte
        </Tabs.Trigger>
        <Tabs.TriggerIndicator className="dark:bg-bg-transparent rounded-none border-b-2 border-primary-main bg-transparent shadow-none dark:border-primary-dm-main" />
      </Tabs.List>
      <Tabs.Panel value="html">
        It really matters and then like it really doesn't matter. What matters
        is the people who are sparked by it. And the people who are like
        offended by it, it doesn't matter.
      </Tabs.Panel>
      <Tabs.Panel value="react">
        Because it's about motivating the doers. Because I'm here to follow my
        dreams and inspire other people to follow their dreams, too.
      </Tabs.Panel>
      <Tabs.Panel value="vue">
        We're not always in the position that we want to be at. We're constantly
        growing. We're constantly making mistakes. We're constantly trying to
        express ourselves and actualize our dreams.
      </Tabs.Panel>
      <Tabs.Panel value="angular">
        Because it's about motivating the doers. Because I'm here to follow my
        dreams and inspire other people to follow their dreams, too.
      </Tabs.Panel>
      <Tabs.Panel value="svelte">
        We're not always in the position that we want to be at. We're constantly
        growing. We're constantly making mistakes. We're constantly trying to
        express ourselves and actualize our dreams.
      </Tabs.Panel>
    </Tabs>
  );
}