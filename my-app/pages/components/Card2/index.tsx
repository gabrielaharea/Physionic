import Paragraf from "../Paragraf";
import CardMUI from "../CardBlue";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Card2 = [
  {
    title: "Emergency Case",
    descriptionOne: "- The best products start with Figma.",
    descriptionTwo: "- Design with real data.",
    descriptionThree: "- Lightning fast prototyping.",
    descriptionFour: "- Fastest way to organize.",
    descriptionFive: " - Work at the speed of thought.",
  },
  {
    title: "Cancer Care",
    descriptionOne: "- The best products start with Figma.",
    descriptionTwo: "- Design with real data.",
    descriptionThree: "- Lightning fast prototyping.",
    descriptionFour: "- Fastest way to organize.",
    descriptionFive: " - Work at the speed of thought.",
  },
  {
    title: "Health Queries",
    descriptionOne: "- The best products start with Figma.",
    descriptionTwo: "- Design with real data.",
    descriptionThree: "- Lightning fast prototyping.",
    descriptionFour: "- Fastest way to organize.",
    descriptionFive: " - Work at the speed of thought.",
  },
];

export default function Card2Component() {
  return (
    <Box p={9}>
      <Paragraf />
      <Grid container spacing={5}>
        {Card2.map((Card2, i) => {
          return (
            <Grid key={i} item>
              <CardMUI {...Card2} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

