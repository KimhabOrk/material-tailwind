import { Typography, Avatar, Rating } from "@material-tailwind/react/dist";

export function RatingWithComment() {
  return (
    <div className="px-8 text-center">
      <Typography type="h4" className="mb-6">
        &quot;This is an excellent product, the documentation is excellent and
        helped me get things done more efficiently.&quot;
      </Typography>
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="lg"
      />
      <Typography type="h6" className="mt-4 !text-base">
        Tania Andrew
      </Typography>
      <Typography type="small" className="mb-4 font-normal text-foreground">
        Lead Frontend Developer
      </Typography>
      <Rating value={4} color="warning" readonly />
    </div>
  );
}