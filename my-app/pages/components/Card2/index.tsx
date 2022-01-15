import { ParagrafProps } from "../Paragraf/index";
import CardMUI from "../CardBlue";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { BoxStyled } from "./styled";
import { Container } from "@mui/material";

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
    <BoxStyled>
      <Container>
        <ParagrafProps
          title="Leading Medicine"
          description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtoniam mechanics"
        />
        <Grid container spacing={5}>
          {Card2.map((Card2, i) => {
            return (
              <Grid key={i} item>
                <CardMUI {...Card2} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </BoxStyled>
  );
}
