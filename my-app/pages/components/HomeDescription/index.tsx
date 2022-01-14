import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ButtonS from "./styled"
import * as S from "./styled"; 


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
      <Button variant="contained">Get Quote How</Button>
      <Button sx={{ color: "primary.contrastText" }} variant="outlined">
        Learn More
      </Button>
    </Box>
  );
};

export default InfoHome;
