import alertFilled from "./alertFilled";
import alertGradient from "./alertGradient";

// types
import type { DeepOmit, DeepPick, DeepRequired } from "ts-essentials";
import type { animate, dismissible, icon, show, variant } from "../../../types/components/alert";
import { variants } from "../../../types/components/alert";
import type { colors } from "../../../types/generic";
import { color } from "../../../types/generic";

export interface AlertStylesType {
  defaultProps?: {
    variant?: variant;
    color?: colors;
    icon?: icon;
    show?: show;
    dismissible?: dismissible;
    class?: string;
    animate?: animate;
  };
  valid?: {
    variants?: variant[];
    colors?: colors[];
  };
  styles?: {
    base?: object;
    variants?: {
      filled?: typeof alertFilled;
      gradient?: typeof alertGradient;
    };
  };
}
export type AlertType = DeepRequired<
  DeepOmit<
    AlertStylesType,
    { defaultProps: { animate: { initial: never; unmount: never; mount: never } } }
  >
> &
  DeepPick<
    AlertStylesType,
    { defaultProps: { animate: { initial: true; unmount: true; mount: true } } }
  >;
export const alert: AlertType = {
  defaultProps: {
    variant: "filled",
    color: "blue",
    icon: "",
    show: true,
    class: "",
    dismissible: {
      action: "",
      onClose: () => undefined,
    },
    animate: {
      initial: {
        opacity: 0,
      },
      unmount: {
        opacity: 0,
      },
      mount: {
        opacity: 1,
      },
    },
  },
  valid: {
    variants: [...variants],
    colors: [...color],
  },
  styles: {
    base: {
      position: "relative",
      display: "block",
      width: "w-full",
      fontFamily: "font-sans",
      fontSize: "text-base",
      fontWeight: "font-regular",
      px: "px-4",
      py: "py-4",
      borderRadius: "rounded-lg",
    },
    variants: {
      filled: alertFilled,
      gradient: alertGradient,
    },
  },
};

export default alert;
