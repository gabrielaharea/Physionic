import { Button } from "@mui/material";
import * as S from "./styled";
import { Stack } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { ButHome } from "./styled";

export const ButtonHome = () => {
  return (
    <Stack spacing={2} direction="row">
      <ButHome>
        <Button fullWidth variant="contained" href="#text-buttons">
          Get Quote Now
        </Button>
      </ButHome>
    </Stack>
  );
};
