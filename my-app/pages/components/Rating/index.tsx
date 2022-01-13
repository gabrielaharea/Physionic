import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import * as React from "react";

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(4);

  return (
    <Box
      sx={{
        "& > legend": { mt: 4 },
      }}
    >
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}
