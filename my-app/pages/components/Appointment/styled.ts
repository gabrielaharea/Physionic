import styled from "@emotion/styled";
import {Select as MuiSelect} from "@mui/material";

export const FormLabelStyled = styled.form`
   h3 {
    position: static;


    left: 42.5px;
    top: 40px;
    font-size: 24px;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    line-height: 32px;
    letter-spacing: 0.1px;

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
