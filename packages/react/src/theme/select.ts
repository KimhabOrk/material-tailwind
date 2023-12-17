import type { DeepPartial } from "@types";

export type SelectTheme = DeepPartial<typeof selectTheme>;

export const selectTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    rounded: false,
    fullWidth: false,
    isError: false,
    isSuccess: false,
    placement: "bottom",
    offset: 5,
    flip: true,
  },
  baseStyle: "relative max-w-[240px] w-full",
  rounded: "rounded-full",
  fullWidth: "max-w-full",
  isError: "border-error-main dark:border-error-dm-main",
  isSuccess: "border-success-main dark:border-success-dm-main",
  selectStyle:
    "h-full w-full outline-none text-left focus:outline-none text-secondary-content bg-transparent ring-transparent border border-secondary-dark transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none dark:border-secondary-dm-main dark:text-secondary-dm-content",
  selectColor: {
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
  selectSize: {
    sm: "text-sm leading-none py-[4.5px] px-1.5 rounded-md ring",
    md: "text-sm leading-none py-[8.5px] px-2.5 rounded-md ring",
    lg: "text-base leading-none py-[12.25px] px-3.5 rounded-lg ring-4",
  },
  arrowStyle:
    "pointer-events-none absolute top-1/2 -translate-y-1/2 right-1.5 text-gray-400 dark:text-gray-700 peer-hover:text-secondary-content peer-focus:text-secondary-content transition-all duration-300 ease-in dark:peer-hover:text-secondary-dm-content dark:peer-focus:text-secondary-dm-content",
  listStyle:
    "bg-white border border-secondary-main rounded-lg shadow-lg shadow-primary-dark/5 p-1 outline-none space-y-1",
  optionStyle: "block w-full text-left outline-0 rounded-md py-1.5 px-2.5",
};

export default selectTheme;
