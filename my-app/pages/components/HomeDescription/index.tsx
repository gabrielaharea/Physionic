import * as React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ButtonS from "@mui/material/Button";
import { ButtonStyle } from "./styled";
import { TextStyled } from "./styled";

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
      <TextStyled>
        <Typography variant="h4" gutterBottom component="div">
          We know how large objects will act, <br /> but things on a small
          scale.
        </Typography>
      </TextStyled>
      <ButtonStyle>
        <Button variant="contained">Get Quote How</Button>
        <Button variant="outlined">Learn More</Button>
      </ButtonStyle>
    </Box>
  );
};

export default InfoHome;
