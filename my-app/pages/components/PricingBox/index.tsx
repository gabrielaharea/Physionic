import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import { ParagrafProps } from "../Paragraf/index";
import { PricingCarts } from "../PricingCarts";

const PricingText = [
  {
    title: "FREE",
    description: "Organize across all apps by hand",
    item1: "Unlimited product updates",
    item2: "Unlimited product updates",
    item3: "Unlimited product updates",
    item4: "1GB  Cloud storage",
    item5: "Email and community support",
  },
  {
    title: "ATANDARD",
    description: "Organize across all apps by hand",
    item1: "Unlimited product updates",
    item2: "Unlimited product updates",
    item3: "Unlimited product updates",
    item4: "1GB  Cloud storage",
    item5: "Email and community support",
  },
  {
    title: "PREMIUM",
    description: "Organize across all apps by hand",
    item1: "Unlimited product updates",
    item2: "Unlimited product updates",
    item3: "Unlimited product updates",
    item4: "1GB  Cloud storage",
    item5: "Email and community support",
  },
];

export default function PricingBox() {
  return (
    <Box>
      <ParagrafProps
        title="Pricing"
        description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtoniam mechanics"
      />
      <Grid container spacing={5}>
        {PricingText.map((PricingText, i) => {
          return (
            <Grid key={i} item>
              <PricingCarts {...PricingText} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
