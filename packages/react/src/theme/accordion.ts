import type { DeepPartial } from "@types";

export type AccordionTheme = DeepPartial<typeof accordionTheme>;
export type AccordionItemTheme = DeepPartial<typeof accordionItemTheme>;
export type AccordionTriggerTheme = DeepPartial<typeof accordionTriggerTheme>;
export type AccordionContentTheme = DeepPartial<typeof accordionContentTheme>;

export const accordionTheme = {
  defaultProps: {
    type: "single",
  },
};

export const accordionItemTheme = {
  defaultProps: {
    disabled: false,
  },
  baseStyle:
    "group block w-full items-center justify-between cursor-pointer border-b border-secondary-dark dark:border-secondary-dm-main aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none",
};

export const accordionTriggerTheme = {
  baseStyle:
    "flex items-center justify-between w-full py-3 text-left font-medium text-secondary-content dark:text-secondary-dm-content",
};

export const accordionContentTheme = {
  baseStyle:
    "block pb-3 text-gray-600 dark:text-gray-400 h-0 data-[open=true]:h-auto",
};