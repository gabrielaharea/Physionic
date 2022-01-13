import styled from "@emotion/styled";
import {Select as MuiSelect} from "@mui/material";

export const FormLabelStyled = styled.form`
   h3 {
    font-size: 50px;
  }
`;

export const Select = styled(MuiSelect)`
&&{
s
}
`;

export const InputWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap:15px;
`;



export default FormLabelStyled;
