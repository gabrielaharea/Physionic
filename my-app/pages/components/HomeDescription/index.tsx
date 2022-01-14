import * as React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ButtonS from "@mui/material/Button";
import {ButtonStyle} from './styled'

const InfoHome = () => {
  return (
    <Box className="info-home">
      <Typography
        variant="h1"
        sx={{
          color: "primary.contrastText",
          fontWeight: 800,
          fontSize: 58,
        }}
      >
        Meet the Best <br /> Hospital
      </Typography>
      <h4>
        We know how large objects will act, <br /> but things on a small scale.
      </h4>
      <ButtonStyle>
        <Button variant="contained">Get Quote How</Button>
        <Button variant="outlined">Learn More</Button>
      </ButtonStyle>
    </Box>
  );
};

export default InfoHome;
