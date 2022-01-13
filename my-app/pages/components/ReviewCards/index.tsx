import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Props } from "./reviewprops";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { FC, useState } from "react";
import * as React from "react";
import BasicRating from "../Rating";
import Stack from "@mui/material/Stack";

export const ReviewCards: React.FC<Props> = ({
  width,
  height,
  src,
  alt,
  title,
  rewiew,
}) => {
  return (
    <>
      <Card>
        <Box
          sx={{
            display: "flex",
            flexWrap: 'wrap',
            "& > :not(style)": {
              m: 2,
              width: 330,
              height: 244,
            },
          }}
        >
          <Paper elevation={0}>
            <BasicRating />
            <Typography>{rewiew}</Typography>
            <Stack direction="row" spacing={2}>
              <Avatar alt="foto-people" src="./img/#user.1.jpg" />
            </Stack>
          </Paper>
        </Box>
      </Card>
    </>
  );
};
