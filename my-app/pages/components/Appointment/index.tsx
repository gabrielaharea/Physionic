import * as React from "react";
import { Button } from "@mui/material";
import * as S from "./styled";
import Paper from "@mui/material/Paper";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect/NativeSelectInput";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { FormLabelStyled } from "./styled";

export const Form = () => {
  const [age, setAge] = React.useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="auth-form">
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          width: "20rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
        {" "}
        <FormLabelStyled>
          <h3 className="text-appointment">Book Appointment</h3>
        </FormLabelStyled>
        <FormControl>
          <S.InputWrapper>
            <div>
              Name<sup>*</sup>
            </div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Full Name *"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <div>
              Email address<sup>*</sup>
            </div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="example@gmail.com"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <div>
              Departament<sup>*</sup>
            </div>
            <S.Select
              required
              fullWidth
              autoComplete="off"
              inputProps={{ "aria-label": "Without label" }}
              name="Departement"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={0}>Please Select</MenuItem>
              <MenuItem value={1}>Departement 1</MenuItem>
              <MenuItem value={2}>Departement 2</MenuItem>
              <MenuItem value={3}>Departement 3</MenuItem>
            </S.Select>
          </S.InputWrapper>
          <S.InputWrapper>
            <div>
              Time<sup>*</sup>
            </div>
            <S.Select
              required
              fullWidth
              autoComplete="off"
              inputProps={{ "aria-label": "Without label" }}
              name="Departement"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={0}>4:00 Available</MenuItem>
              <MenuItem value={1}>5:00 Available</MenuItem>
              <MenuItem value={2}>6:00 Available</MenuItem>
              <MenuItem value={3}>7:00 Available</MenuItem>
            </S.Select>
          </S.InputWrapper>
          <S.InputWrapper>
            <Stack spacing={2} direction="row">
              <Button sx={{ marginTop: "2rem" }} fullWidth variant="contained">
                Book Apointment
              </Button>
            </Stack>
          </S.InputWrapper>
        </FormControl>
      </Paper>
    </div>
  );
};

export default Form;
