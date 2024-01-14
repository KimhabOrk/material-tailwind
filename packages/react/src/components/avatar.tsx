import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { avatarTheme } from "@theme";

// @types
import type { Props } from "@types";

export interface AvatarProps extends Props<"img" | any> {
  as?: React.ElementType;
  src: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  variant?: "circular" | "rounded" | "square";
  className?: string;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/button) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/button#button-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/button#button-theme)
 *
 * @example
 * ```tsx
 * import { Button } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return <Button>Button</Button>;
 * }
 * ```
 */
export const Avatar = React.forwardRef<
  HTMLImageElement | HTMLElement,
  AvatarProps
>(({ as, src, alt, variant, size, className, ...rest }, ref) => {
  const Element = as ?? "img";
  const contextTheme = useTheme();
  const theme = contextTheme?.avatar ?? avatarTheme;
  const defaultProps = theme?.defaultProps;

  size ??= (defaultProps?.size as AvatarProps["size"]) ?? "md";
  variant ??= (defaultProps?.variant as AvatarProps["variant"]) ?? "circular";

  const styles = twMerge(
    theme.baseStyle,
    theme["size"][size],
    theme["variant"][variant],
    className,
  );

  return <Element {...rest} ref={ref} src={src} alt={alt} className={styles} />;
});

Avatar.displayName = "MaterialTailwind.Avatar";

export default Avatar;