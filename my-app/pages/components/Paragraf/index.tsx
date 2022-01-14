import Typography from "@mui/material/Typography";
import * as React from "react";

type Props = {
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
  title: string;
  description: string;
};

export const ParagrafProps: React.FC<Props> = ({
  width,
  height,
  src,
  alt,
  title,
  description,
}) => {
  return (
    <>
      <div>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
    </>
  );
};
