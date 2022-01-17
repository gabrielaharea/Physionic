import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import * as S from "./styled";
import Paper from "@mui/material/Paper";
import * as React from "react";
import InputBase from "@mui/material/InputBase";

export default function TextFieldSubscribe() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "flex-end",
        width: "360px",
        height: "58px",
      }}
    >
      <InputBase fullWidth placeholder="Your Email" />

      <Button
        sx={{ borderRadius: "0px", padding: "20px" }}
        fullWidth
        variant="contained"
      >
        Subscribe
      </Button>
    </Paper>
  );
}
