import { Button } from "@mui/material";
import * as S from "./styled";
import { Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const ButtonHome = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        fullWidth
        variant="contained"
        href="#text-buttons"
        // startIcon={<SendIcon />}
      >
        Get Quote Now
      </Button>
    </Stack>
  );
};
