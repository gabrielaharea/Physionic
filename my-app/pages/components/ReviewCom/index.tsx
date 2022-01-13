import Paragraf from "../Paragraf";
import { ReviewCards } from "../ReviewCards";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const RewiewPages = [
  {
    rewiew:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    rewiew:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    rewiew:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
];

export default function CardsRewiewPages() {
  return (
    <Box p={9}>
      <Paragraf />
      <Grid container spacing={5}>
        {RewiewPages.map((RewiewPages, i) => {
          return (
            <Grid key={i} item>
              <ReviewCards {...RewiewPages} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

// const RewiewPages = () => {
//   return (
//     <div>
//       <Paragraf />
//       <ReviewCards rewiew="Slate helps you see how many more days you need to work to reach your financial goal." />
//       <ReviewCards rewiew="Slate helps you see how many more days you need to work to reach your financial goal." />
//       <ReviewCards rewiew="Slate helps you see how many more days you need to work to reach your financial goal." />
//     </div>
//   );
// };

// export default RewiewPages;
