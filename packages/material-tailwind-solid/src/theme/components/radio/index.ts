import radioColors from "./radioColors";

// types
import type {
  color,
  label,
  icon,
  ripple,
  objectType,
  disabled,
} from "../../../types/components/checkbox";
import { propTypesColor } from "../../../types/components/checkbox";

export interface RadioStylesType {
  defaultProps: {
    color: color;
    label: label;
    icon: icon;
    ripple: ripple;
    class: string;
    disabled: disabled;
    containerProps: objectType;
    labelProps: objectType;
    iconProps: objectType;
  };
  valid: {
    colors: color[];
  };
  styles: {
    base: {
      root: object;
      container: object;
      input: object;
      label: object;
      icon: object;
      disabled: object;
    };
    colors: typeof radioColors;
  };
}

export const radio: RadioStylesType = {
  defaultProps: {
    color: "blue",
    label: undefined,
    icon: undefined,
    ripple: true,
    class: "",
    disabled: false,
    containerProps: {},
    labelProps: {},
    iconProps: {},
  },
  valid: {
    colors: [...propTypesColor],
  },
  styles: {
    base: {
      root: {
        display: "inline-flex",
        alignItems: "items-center",
      },
      container: {
        position: "relative",
        display: "flex",
        alignItems: "items-center",
        cursor: "cursor-pointer",
        p: "p-3",
        borderRadius: "rounded-full",
      },
      input: {
        peer: "peer",
        position: "relative",
        appearance: "appearance-none",
        width: "w-5",
        height: "h-5",
        borderWidth: "border",
        borderRadius: "rounded-full",
        borderColor: "border-blue-gray-200",
        cursor: "cursor-pointer",
        transition: "transition-all",
        before: {
          content: "before:content['']",
          display: "before:block",
          bg: "before:bg-blue-gray-500",
          width: "before:w-12",
          height: "before:h-12",
          borderRadius: "before:rounded-full",
          position: "before:absolute",
          top: "before:top-2/4",
          left: "before:left-2/4",
          transform: "before:-translate-y-2/4 before:-translate-x-2/4",
          opacity: "before:opacity-0 hover:before:opacity-10",
          transition: "before:transition-opacity",
        },
      },
      label: {
        color: "text-gray-700",
        fontWeight: "font-light",
        userSelect: "select-none",
        cursor: "cursor-pointer",
        mt: "mt-px",
      },
      icon: {
        position: "absolute",
        top: "top-2/4",
        left: "left-2/4",
        translate: "-translate-y-2/4 -translate-x-2/4",
        pointerEvents: "pointer-events-none",
        opacity: "opacity-0 peer-checked:opacity-100",
        transition: "transition-opacity",
      },
      disabled: {
        opacity: "opacity-50",
        pointerEvents: "pointer-events-none",
      },
    },
    colors: radioColors,
  },
};

export default radio;
