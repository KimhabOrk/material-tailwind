import { Accordion } from "@material-tailwind/react/dist";
import { NavArrowDown } from "iconoir-react";

export function AccordionAllOpen() {
  return (
    <Accordion type="multiple" defaultValue={["react", "html", "vue"]}>
      <Accordion.Item value="react">
        <Accordion.Trigger>
          Material Tailwind React
          <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
        </Accordion.Trigger>
        <Accordion.Content>
          Material Tailwind is an open-source crafted in Tailwind CSS. Get
          Material Tailwind and take advantage of its free components and
          features that will help you set up your web project quickly.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="html">
        <Accordion.Trigger>
          Material Tailwind HTML
          <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
        </Accordion.Trigger>
        <Accordion.Content>
          Material Tailwind is an open-source crafted in Tailwind CSS. Get
          Material Tailwind and take advantage of its free components and
          features that will help you set up your web project quickly.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="vue">
        <Accordion.Trigger>
          Material Tailwind Vue
          <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
        </Accordion.Trigger>
        <Accordion.Content>
          Material Tailwind is an open-source crafted in Tailwind CSS. Get
          Material Tailwind and take advantage of its free components and
          features that will help you set up your web project quickly.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}