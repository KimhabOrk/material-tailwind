import type { DeepPartial } from "@types";

export type TextareaTheme = DeepPartial<typeof textareaTheme>;

export const textareaTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    resize: false,
    isError: false,
    isSuccess: false,
  },
  baseStyle:
    "peer block w-full resize-none outline-none focus:outline-none text-secondary-content placeholder:text-gray-400 bg-transparent ring-transparent border border-secondary-dark transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none dark:border-secondary-dm-main dark:text-secondary-dm-content dark:placeholder:text-gray-700",
  resize: "resize-y",
  color: {
    primary:
      "hover:border-primary-main hover:ring-primary-main/10 focus:border-primary-main focus:ring-primary-main/10 dark:hover:border-primary-dm-main dark:hover:ring-primary-dm-main/20 dark:focus:border-primary-dm-main dark:focus:ring-primary-dm-main/20",
    secondary:
      "hover:border-secondary-main hover:ring-secondary-main/10 focus:border-secondary-main focus:ring-secondary-main/10 dark:hover:border-secondary-dm-main dark:hover:ring-secondary-dm-main/20 dark:focus:border-secondary-dm-main dark:focus:ring-secondary-dm-main/20",
    info: "hover:border-info-main hover:ring-info-main/10 focus:border-info-main focus:ring-info-main/10 dark:hover:border-info-dm-main dark:hover:ring-info-dm-main/20 dark:focus:border-info-dm-main dark:focus:ring-info-dm-main/20",
    success:
      "hover:border-success-main hover:ring-success-main/10 focus:border-success-main focus:ring-success-main/10 dark:hover:border-success-dm-main dark:hover:ring-success-dm-main/20 dark:focus:border-success-dm-main dark:focus:ring-success-dm-main/20",
    warning:
      "hover:border-warning-main hover:ring-warning-main/10 focus:border-warning-main focus:ring-warning-main/10 dark:hover:border-warning-dm-main dark:hover:ring-warning-dm-main/20 dark:focus:border-warning-dm-main dark:focus:ring-warning-dm-main/20",
    error:
      "hover:border-error-main hover:ring-error-main/10 focus:border-error-main focus:ring-error-main/10 dark:hover:border-error-dm-main dark:hover:ring-error-dm-main/20 dark:focus:border-error-dm-main dark:focus:ring-error-dm-main/20",
  },
  size: {
    sm: "text-sm leading-none p-1.5 rounded-md ring",
    md: "text-sm leading-none p-2.5 rounded-md ring",
    lg: "text-base leading-none p-3.5 rounded-lg ring-4",
  },
  isError: "border-error-main dark:border-error-dm-main",
  isSuccess: "border-success-main dark:border-success-dm-main",
};