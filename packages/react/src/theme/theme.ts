import radioTheme from "./radio";
import buttonTheme from "./button";
import collapseTheme from "./collapse";
import checkboxTheme from "./checkbox";
import typographyTheme from "./typography";
import iconButtonTheme from "./icon-button";
import buttonGroupTheme from "./button-group";

// @types
import type { DeepPartial } from "@types";

export type Theme = DeepPartial<typeof theme>;

export const theme = {
  button: buttonTheme,
  buttonGroup: buttonGroupTheme,
  checkbox: checkboxTheme,
  iconButton: iconButtonTheme,
  radio: radioTheme,
  collapse: collapseTheme,
  typography: typographyTheme,
};

export default theme;
