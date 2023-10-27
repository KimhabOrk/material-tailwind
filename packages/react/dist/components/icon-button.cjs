"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/icon-button.tsx
var icon_button_exports = {};
__export(icon_button_exports, {
  IconButton: () => IconButton,
  default: () => icon_button_default2
});
module.exports = __toCommonJS(icon_button_exports);
var import_react2 = __toESM(require("react"), 1);
var import_tailwind_merge2 = require("tailwind-merge");
var import_material_ripple_effects = __toESM(require("material-ripple-effects"), 1);

// src/context/index.tsx
var import_react = __toESM(require("react"), 1);

// src/theme/button.ts
var buttonTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true,
    fullWidth: false
  },
  baseStyle: "inline-block border align-middle select-none font-sans font-medium text-center transition-all duration-300 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
  rounded: "rounded-full",
  fullWidth: "block w-full",
  size: {
    sm: "text-sm leading-none py-1.5 px-2.5 rounded-md",
    md: "text-sm leading-none py-2.5 px-3.5 rounded-md",
    lg: "text-base leading-none py-3.5 px-5 rounded-lg"
  },
  variant: {
    ghost: {
      primary: "bg-transparent border-transparent text-primary-main hover:bg-primary-main/5 focus:bg-primary-main/5 hover:border-primary-main/5 focus:border-primary-main/5 dark:text-primary-dm-main dark:hover:bg-primary-dm-main/5 dark:focus:bg-primary-dm-main/5 dark:hover:border-primary-dm-main/5 dark:focus:border-primary-dm-main/5",
      secondary: "bg-transparent border-transparent text-secondary-content hover:bg-secondary-main/10 focus:bg-secondary-main/10 hover:border-secondary-main/10 focus:border-secondary-main/10",
      info: "bg-transparent border-transparent text-info-main hover:bg-info-main/10 focus:bg-info-main/10 hover:border-info-main/10 focus:border-info-main/10",
      success: "bg-transparent border-transparent text-success-main hover:bg-success-main/10 focus:bg-success-main/10 hover:border-success-main/10 focus:border-success-main/10",
      warning: "bg-transparent border-transparent text-warning-dark hover:bg-warning-main/10 focus:bg-warning-main/10 hover:border-warning-main/10 focus:border-warning-main/10",
      error: "bg-transparent border-transparent text-error-main hover:bg-error-main/10 focus:bg-error-main/10 hover:border-error-main/10 focus:border-error-main/10"
    },
    solid: {
      primary: "bg-primary-main border-primary-dark text-primary-content hover:bg-primary-light focus:bg-primary-light dark:bg-primary-dm-main dark:border-primary-dm-dark dark:text-primary-dm-content dark:hover:bg-primary-dm-light hover:focus:bg-primary-dm-light",
      secondary: "bg-secondary-main border-secondary-dark text-secondary-content hover:bg-secondary-light focus:bg-secondary-light dark:bg-secondary-dm-main dark:border-secondary-dm-dark dark:text-secondary-dm-content dark:hover:bg-secondary-dm-light dark:focus:bg-secondary-dm-light",
      info: "bg-info-main border-info-dark text-info-content hover:bg-info-light focus:bg-info-light dark:bg-info-dm-main dark:border-info-dm-dark dark:text-info-dm-content dark:hover:bg-info-dm-light dark:focus:bg-info-dm-light",
      success: "bg-success-main border-success-dark text-success-content hover:bg-success-light focus:bg-success-light dark:bg-success-dm-main dark:border-success-dm-dark dark:text-success-dm-content dark:hover:bg-success-dm-light dark:focus:bg-success-dm-light",
      warning: "bg-warning-main border-warning-dark text-warning-content hover:bg-warning-light focus:bg-warning-light dark:bg-warning-dm-main dark:border-warning-dm-dark dark:text-warning-dm-content dark:hover:bg-warning-dm-light dark:focus:bg-warning-dm-light",
      error: "bg-error-main border-error-dark text-error-content hover:bg-error-light focus:bg-error-light dark:bg-error-dm-main dark:border-error-dm-dark dark:text-error-dm-content dark:hover:bg-error-dm-light dark:focus:bg-error-dm-light"
    },
    outline: {
      primary: "bg-transparent border-primary-main text-primary-main hover:bg-primary-main focus:bg-primary-main hover:text-primary-content focus:text-primary-content hover:border-primary-dark focus:border-primary-dark dark:border-primary-dm-main dark:text-primary-dm-main dark:hover:bg-primary-dm-main dark:focus:bg-primary-dm-main dark:hover:text-primary-dm-content dark:focus:text-primary-dm-content dark:hover:border-primary-dm-dark dark:focus:border-primary-dm-dark",
      secondary: "bg-transparent border-secondary-dark text-secondary-content hover:bg-secondary-main focus:bg-secondary-main hover:text-secondary-content focus:text-secondary-content hover:border-secondary-dark focus:border-secondary-dark",
      info: "bg-transparent border-info-main text-info-main hover:bg-info-main focus:bg-info-main hover:text-info-content focus:text-info-content hover:border-info-dark focus:border-info-dark",
      success: "bg-transparent border-success-main text-success-main hover:bg-success-main focus:bg-success-main hover:text-success-content focus:text-success-content hover:border-success-dark focus:border-success-dark",
      warning: "bg-transparent border-warning-dark text-warning-dark hover:bg-warning-main focus:bg-warning-main hover:text-warning-content focus:text-warning-content hover:border-warning-dark focus:border-warning-dark",
      error: "bg-transparent border-error-main text-error-main hover:bg-error-main focus:bg-error-main hover:text-error-content focus:text-error-content hover:border-error-dark focus:border-error-dark"
    },
    gradient: {
      primary: "bg-gradient-to-tr from-primary-dark to-primary-light border-primary-dark text-primary-content hover:opacity-90 focus:opacity-90 dark:from-primary-dm-dark dark:to-primary-dm-light dark:border-primary-dm-dark dark:text-primary-dm-content",
      secondary: "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary-dark text-secondary-content hover:opacity-90 focus:opacity-90",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info-dark text-info-content hover:opacity-90 focus:opacity-90",
      success: "bg-gradient-to-tr from-success-dark to-success-light border-success-dark text-success-content hover:opacity-90 focus:opacity-90",
      warning: "bg-gradient-to-tr from-warning-dark to-warning-light border-warning-dark text-warning-content hover:opacity-90 focus:opacity-90",
      error: "bg-gradient-to-tr from-error-dark to-error-light border-error-dark text-error-content hover:opacity-90 focus:opacity-90"
    }
  }
};
var button_default = buttonTheme;

// src/theme/collapse.ts
var collapseTheme = {
  baseStyle: "block w-full overflow-hidden origin-top transition-all duration-500",
  openStyle: "h-auto",
  closeStyle: "h-0"
};
var collapse_default = collapseTheme;

// src/theme/typography.ts
var typographyTheme = {
  defaultProps: {
    variant: "p",
    color: "inherit",
    isGradient: false
  },
  baseStyle: "block font-sans antialiased",
  isGradient: "bg-clip-text text-transparent",
  variant: {
    h1: "text-5xl font-bold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold",
    p: "text-base font-normal",
    small: "text-sm font-normal"
  },
  color: {
    inherit: "text-inherit",
    primary: "text-primary-main",
    secondary: "text-secondary-main",
    info: "text-info-main",
    success: "text-success-main",
    warning: "text-warning-main",
    error: "text-error-main"
  }
};
var typography_default = typographyTheme;

// src/theme/icon-button.ts
var iconButtonTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true
  },
  baseStyle: "inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
  rounded: "rounded-full",
  size: {
    sm: "text-sm leading-none min-w-[32px] min-h-[32px] rounded-md",
    md: "text-sm leading-none min-w-[36px] min-h-[36px] rounded-md",
    lg: "text-base leading-none min-w-[46px] min-h-[46px] rounded-lg"
  },
  variant: {
    ghost: {
      primary: "bg-transparent border-transparent text-primary-main hover:bg-primary-main/5 focus:bg-primary-main/5 hover:border-primary-main/5 focus:border-primary-main/5",
      secondary: "bg-transparent border-transparent text-secondary-content hover:bg-secondary-main/10 focus:bg-secondary-main/10 hover:border-secondary-main/10 focus:border-secondary-main/10",
      info: "bg-transparent border-transparent text-info-main hover:bg-info-main/10 focus:bg-info-main/10 hover:border-info-main/10 focus:border-info-main/10",
      success: "bg-transparent border-transparent text-success-main hover:bg-success-main/10 focus:bg-success-main/10 hover:border-success-main/10 focus:border-success-main/10",
      warning: "bg-transparent border-transparent text-warning-dark hover:bg-warning-main/10 focus:bg-warning-main/10 hover:border-warning-main/10 focus:border-warning-main/10",
      error: "bg-transparent border-transparent text-error-main hover:bg-error-main/10 focus:bg-error-main/10 hover:border-error-main/10 focus:border-error-main/10"
    },
    solid: {
      primary: "bg-primary-main border-primary-dark text-primary-content hover:bg-primary-light focus:bg-primary-light",
      secondary: "bg-secondary-main border-secondary-dark text-secondary-content hover:bg-secondary-light focus:bg-secondary-light",
      info: "bg-info-main border-info-dark text-info-content hover:bg-info-light focus:bg-info-light",
      success: "bg-success-main border-success-dark text-success-content hover:bg-success-light focus:bg-success-light",
      warning: "bg-warning-main border-warning-dark text-warning-content hover:bg-warning-light focus:bg-warning-light",
      error: "bg-error-main border-error-dark text-error-content hover:bg-error-light focus:bg-error-light"
    },
    outline: {
      primary: "bg-transparent border-primary-main text-primary-main hover:bg-primary-main focus:bg-primary-main hover:text-primary-content focus:text-primary-content hover:border-primary-dark focus:border-primary-dark",
      secondary: "bg-transparent border-secondary-dark text-secondary-content hover:bg-secondary-main focus:bg-secondary-main hover:text-secondary-content focus:text-secondary-content hover:border-secondary-dark focus:border-secondary-dark",
      info: "bg-transparent border-info-main text-info-main hover:bg-info-main focus:bg-info-main hover:text-info-content focus:text-info-content hover:border-info-dark focus:border-info-dark",
      success: "bg-transparent border-success-main text-success-main hover:bg-success-main focus:bg-success-main hover:text-success-content focus:text-success-content hover:border-success-dark focus:border-success-dark",
      warning: "bg-transparent border-warning-dark text-warning-dark hover:bg-warning-main focus:bg-warning-main hover:text-warning-content focus:text-warning-content hover:border-warning-dark focus:border-warning-dark",
      error: "bg-transparent border-error-main text-error-main hover:bg-error-main focus:bg-error-main hover:text-error-content focus:text-error-content hover:border-error-dark focus:border-error-dark"
    },
    gradient: {
      primary: "bg-gradient-to-tr from-primary-dark to-primary-light border-primary-dark text-primary-content hover:opacity-90 focus:opacity-90",
      secondary: "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary-dark text-secondary-content hover:opacity-90 focus:opacity-90",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info-dark text-info-content hover:opacity-90 focus:opacity-90",
      success: "bg-gradient-to-tr from-success-dark to-success-light border-success-dark text-success-content hover:opacity-90 focus:opacity-90",
      warning: "bg-gradient-to-tr from-warning-dark to-warning-light border-warning-dark text-warning-content hover:opacity-90 focus:opacity-90",
      error: "bg-gradient-to-tr from-error-dark to-error-light border-error-dark text-error-content hover:opacity-90 focus:opacity-90"
    }
  }
};
var icon_button_default = iconButtonTheme;

// src/theme/button-group.ts
var buttonGroupTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true,
    fullWidth: false,
    orientation: "horizontal"
  },
  baseStyle: "inline-flex",
  vertical: "flex-col",
  horizontal: "flex-row",
  verticalAppearance: "[&:not(:first-child):not(:last-child)]:[&_*]:rounded-none first:[&_*]:rounded-b-none last:[&_*]:rounded-t-none [&:not(:first-child):not(:last-child)]:[&_*]:border-t-0 last:[&_*]:border-t-0",
  horizontalAppearance: "[&:not(:first-child):not(:last-child)]:[&_*]:rounded-none first:[&_*]:rounded-r-none last:[&_*]:rounded-l-none [&:not(:first-child):not(:last-child)]:[&_*]:border-l-0 last:[&_*]:border-l-0",
  fullWidth: "w-full"
};
var button_group_default = buttonGroupTheme;

// src/theme/theme.ts
var theme = {
  button: button_default,
  collapse: collapse_default,
  iconButton: icon_button_default,
  typography: typography_default,
  buttonGroup: button_group_default
};

// src/context/index.tsx
var import_deepmerge = __toESM(require("deepmerge"), 1);

// src/utils/merge-theme.ts
var import_tailwind_merge = require("tailwind-merge");

// src/context/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var MaterialTailwindThemeContext = import_react.default.createContext(theme);
MaterialTailwindThemeContext.displayName = "MaterialTailwind.ThemeProvider";
function useTheme() {
  const context = import_react.default.useContext(MaterialTailwindThemeContext);
  if (!context) {
    return null;
  }
  return context;
}

// src/components/icon-button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var IconButton = import_react2.default.forwardRef(
  ({ color, variant, size, ripple, rounded, className, children, ...rest }, ref) => {
    var _a, _b, _c, _d, _e, _f;
    const contextTheme = useTheme();
    const theme2 = (_a = contextTheme == null ? void 0 : contextTheme.iconButton) != null ? _a : iconButtonTheme;
    const defaultProps = (_b = contextTheme == null ? void 0 : contextTheme.iconButton) == null ? void 0 : _b.defaultProps;
    size != null ? size : size = (_c = defaultProps == null ? void 0 : defaultProps.size) != null ? _c : "md";
    ripple != null ? ripple : ripple = (_d = defaultProps == null ? void 0 : defaultProps.ripple) != null ? _d : true;
    color != null ? color : color = (_e = defaultProps == null ? void 0 : defaultProps.color) != null ? _e : "primary";
    variant != null ? variant : variant = (_f = defaultProps == null ? void 0 : defaultProps.variant) != null ? _f : "solid";
    const rippleEffect = ripple !== void 0 && new import_material_ripple_effects.default();
    const handleClick = (e) => {
      const onClick = rest == null ? void 0 : rest.onClick;
      const isDarkRipple = variant === "ghost" || color === "secondary" || color === "warning";
      if (ripple) {
        rippleEffect.create(e, isDarkRipple ? "dark" : "light");
      }
      return typeof onClick === "function" && onClick(e);
    };
    const styles = (0, import_tailwind_merge2.twMerge)(
      theme2.baseStyle,
      theme2["size"][size],
      theme2["variant"][variant][color],
      rounded && theme2["rounded"],
      className
    );
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { ...rest, ref, className: styles, onClick: handleClick, children });
  }
);
IconButton.displayName = "MaterialTailwind.IconButton";
var icon_button_default2 = IconButton;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IconButton
});
