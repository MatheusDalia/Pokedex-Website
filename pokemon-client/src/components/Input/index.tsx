import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import theme from 'styles/theme';

export const Input = styled(TextField)`
  & .MuiInputLabel-root,
  input {
    margin-top: 26px;
    font-family: Barlow;
    font-size: 16px;
    border: none;
    color: ${theme.colors.black};
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
    border-bottom: 2px solid ${theme.colors.black} !important;
    border-bottom-right-radius: 1px;
    border-bottom-left-radius: 1px;
  }
`;
