import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Props } from "./reviewprops";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { FC, useState } from "react";
import * as React from "react";
import BasicRating from "../Rating";

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
        <Box>
          <Paper>
            <BasicRating />
            <Typography>{rewiew}</Typography>
            <Avatar alt="foto-people" src="/img/#user.1.jpg" />
          </Paper>
        </Box>
      </Card>
    </>
  );
};
