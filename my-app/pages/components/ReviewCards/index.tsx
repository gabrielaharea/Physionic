import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Props } from "./reviewprops";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { FC, useState } from "react";
import * as React from "react";
import BasicRating from "../Rating";


export const CardRewiew: React.FC<Props> = ({
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
        <Box>
          <Paper>
            <BasicRating />
            <Typography>{description}</Typography>
            <Avatar alt="foto-people" src="/img/#user.1.jpg" />
          </Paper>
        </Box>
      </Card>
    </>
  );
};

export default CardRewiew;
