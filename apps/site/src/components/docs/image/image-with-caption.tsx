import { Typography } from "@material-tailwind/react/dist";

export function ImageWithCaption() {
  return (
    <figure>
      <img
        src="https://dub.sh/Y0NxRWv"
        alt="nature-image"
        className="h-96 w-full rounded-lg object-cover object-center"
      />
      <Typography as="caption" type="small" className="mt-2 text-center">
        Image Caption
      </Typography>
    </figure>
  );
}
