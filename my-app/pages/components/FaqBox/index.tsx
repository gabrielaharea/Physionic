import { ParagrafProps } from "../Paragraf/index";
import { FaqBoxCard } from "../FaqBoxCard";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const FaqText = [
  {
    title: "the quick fox jumps over the lazy dog",
    description: "Things on a very small scale behave like nothing",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description: "Things on a very small scale behave like nothing",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description: "Things on a very small scale behave like nothing",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description: "Things on a very small scale behave like nothing",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description: "Things on a very small scale behave like nothing",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description: "Things on a very small scale behave like nothing",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description: "Things on a very small scale behave like nothing",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description: "Things on a very small scale behave like nothing",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description: "Things on a very small scale behave like nothing",
  },
];

export default function FaqBox() {
  return (
    <Box p={9}>
      <ParagrafProps
        title="FAQ"
        description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtoniam mechanics"
      />
      <Grid container spacing={5}>
        {FaqText.map((FaqText, i) => {
          return (
            <Grid key={i} item>
              <FaqBoxCard {...FaqText} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
