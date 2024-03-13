"use client";

// @components
import React from "react";
import { Check, Copy } from "iconoir-react";
import { Fira_Code } from "next/font/google";
import { IconButton, Button } from "@material-tailwind/react/dist";

// @hooks
import { useCopyToClipboard } from "usehooks-ts";

// @utils
import { twMerge } from "tailwind-merge";

const firaCode = Fira_Code({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

interface ComponentPreviewProps {
  demo: React.ReactNode;
  children: any;
  className?: string;
}

const MIN_CODE_HEIGHT = 260;

export function ComponentPreview({
  demo,
  children,
  className,
}: ComponentPreviewProps) {
  const codeRef = React.useRef<any>(null);
  const [, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);
  const [codeHeight, setCodeHeight] = React.useState(0);

  const copyCode = () => {
    setIsCopied(true);
    copy(codeRef.current.innerText);
  };
  const resetCopy = () => setIsCopied(false);

  const containerStyles = twMerge(
    "border-surface rounded-lg border p-2",
    className,
  );

  const codeBlockStyles = twMerge(
    firaCode.className,
    "code-preview relative bg-gray-950 rounded-md overflow-hidden",
    showCode && "pb-12",
  );

  React.useEffect(() => {
    const element = codeRef.current;

    if (element) {
      setCodeHeight(element.firstChild.clientHeight);
    }

    return () => {
      setCodeHeight(0);
    };
  }, []);

  return (
    <div className={containerStyles}>
      <div className="mb-2 grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-md p-4 lg:overflow-hidden">
        {demo}
      </div>
      <div className={codeBlockStyles}>
        <IconButton
          size="sm"
          variant="ghost"
          ripple={false}
          onClick={copyCode}
          onMouseLeave={resetCopy}
          className="absolute right-1 top-1 z-10 text-gray-100 hover:border-transparent hover:bg-transparent"
        >
          {isCopied ? <Check /> : <Copy />}
        </IconButton>
        {React.cloneElement(children, {
          ref: codeRef,
          style: {
            height: showCode
              ? "auto"
              : codeHeight <= MIN_CODE_HEIGHT
                ? "unset"
                : `${MIN_CODE_HEIGHT}px`,
          },
        })}
        {codeHeight > MIN_CODE_HEIGHT && (
          <div className="absolute bottom-0 left-1/2 grid h-20 w-full -translate-x-1/2 items-end justify-center bg-gradient-to-t from-gray-950 via-gray-950/75 to-transparent pb-2">
            <Button
              size="sm"
              color="secondary"
              onClick={() => setShowCode((cur) => !cur)}
            >
              {showCode ? "Hide Code" : "Show Code"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComponentPreview;