import buttonFilled from "./buttonFilled";
import buttonGradient from "./buttonGradient";
import buttonOutlined from "./buttonOutlined";
import buttonText from "./buttonText";
import type { DeepRequired } from "ts-essentials";

// types
import type { variant, size, color, fullWidth, ripple } from "../../../types/components/button";
import { propTypesVariant, propTypesSize, propTypesColor } from "../../../types/components/button";

export interface ButtonStyleTypes {
  defaultProps?: {
    variant?: variant;
    size?: size;
    color?: color;
    fullWidth?: fullWidth;
    ripple?: ripple;
  };
  valid?: {
    variants?: variant[];
    sizes?: size[];
    colors?: color[];
  };
  styles?: {
    base?: {
      initial?: object;
      fullWidth?: object;
    };
    sizes?: {
      sm?: object;
      md?: object;
      lg?: object;
    };
    variants?: {
      filled?: typeof buttonFilled;
      gradient?: typeof buttonGradient;
      outlined?: typeof buttonOutlined;
      text?: typeof buttonText;
    };
  };
}

export type ButtonType = DeepRequired<ButtonStyleTypes>;

export const button: ButtonType = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "blue",
    fullWidth: false,
    ripple: true,
  },
  valid: {
    variants: [...propTypesVariant],
    sizes: [...propTypesSize],
    colors: [...propTypesColor],
  },
  styles: {
    base: {
      initial: {
        verticalAlign: "align-middle",
        userSelect: "select-none",
        fontFamily: "font-sans",
        fontWeight: "font-bold",
        textAlign: "text-center",
        textTransform: "uppercase",
        transition: "transition-all",
        disabled: "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
      },
      fullWidth: {
        display: "block",
        width: "w-full",
      },
    },
    sizes: {
      sm: {
        fontSize: "text-xs",
        py: "py-2",
        px: "px-4",
        borderRadius: "rounded-lg",
      },
      md: {
        fontSize: "text-xs",
        py: "py-3",
        px: "px-6",
        borderRadius: "rounded-lg",
      },
      lg: {
        fontSize: "text-sm",
        py: "py-3.5",
        px: "px-7",
        borderRadius: "rounded-lg",
      },
    },
    variants: {
      filled: buttonFilled,
      gradient: buttonGradient,
      outlined: buttonOutlined,
      text: buttonText,
    },
  },
};

export default button;
