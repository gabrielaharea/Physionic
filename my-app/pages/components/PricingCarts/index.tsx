import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Props } from "./propsCard";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { FC, useState } from "react";
import * as React from "react";
import { Button } from "@mui/material";

type Props = {
   title: string;
   description: string;
   item1: string;
   item2: string;
   item3: string;
   item4: string;
   item5: string;

   
}

export const PricingCarts: React.FC<Props> = ({
  title,
  description,
  item1,
  item2,
  item3,
  item4,
  item5,

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
              width: 327,
              height: 665,
            },
          }}
        >
          <Paper elevation={0}>
            <Typography>{title}</Typography>
            <Typography>{description}</Typography>
            <Typography>{item1}</Typography>
            <Typography>{item2}</Typography>
            <Typography>{item3}</Typography>
            <Typography>{item4}</Typography>
            <Typography>{item5}</Typography>
            <Button>Try for free</Button>
          </Paper>
        </Box>
      </Card>
    </>
  );
};
