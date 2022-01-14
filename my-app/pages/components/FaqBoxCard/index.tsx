import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Props } from "./propsCard";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { FC, useState } from "react";
import * as React from "react";

export const FaqBoxCard: React.FC<Props> = ({
  width,
  height,
  src,
  alt,
  title,
  description,
}) => {
  return (
    <>
      <Card>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 2,
              width: 333,
              height: 151,
            },
          }}
        >
          <Paper elevation={0}>
            <Typography>{title}</Typography>
            <Typography>{description}</Typography>
          </Paper>
        </Box>
      </Card>
    </>
  );
};
