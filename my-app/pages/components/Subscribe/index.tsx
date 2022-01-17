import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import Container from "@mui/material/Container";
import TextFieldSubscribe from "../SubscribeBox";
import { SubscribeStyle } from "./styled";

export default function Subscribe() {
  return (
    <SubscribeStyle>
      <div className="text-subscribe">
        <h2>Get In Touch</h2>
        <p>
          The gradual accumulation of information about atomic and small-scale
          behaviour during the first quarter of the 20th{" "}
        </p>
      </div>
      <TextFieldSubscribe  />
    </SubscribeStyle>
  );
}
