import styled from 'styled-components';
import Button from '@mui/material/Button';
import theme from 'styles/theme';

interface ButtonProps {
  height?: string;
  width?: string;
  letterSpacing?: string;
  textTransfrom?: string;
  borderRadius?: string;
  padding?: string;
  font?: string;
  fontWeight?: string;
  margin?: string;
  textColor?: string;
  alignSelf?: string;
}

const ButtonCustom = styled(Button) <ButtonProps>`
  &.MuiButton-root {
    height: ${(props) => props.height || '45px'};
    width: ${(props) => props.width || '220px'};
    letter-spacing: ${(props) => props.letterSpacing || '1.25px'};
    text-transform: ${(props) => props.textTransfrom || 'none'};
    border-radius: ${(props) => props.borderRadius || '51px'};
    font-size: ${(props) => props.font || '12px'};
    font-weight: ${(props) => props.fontWeight || '500'};
    margin: ${(props) => props.margin || '0'};
    color: ${(props) => props.textColor || (({ theme }) => theme.colors.red)};
    align-self: ${(props) => props.alignSelf || 'auto'};
    font: ${theme.fonts.regular};
    font-size: 20px;
  }
`;

export const RedButton = styled(ButtonCustom)`
  &.MuiButton-root {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.red};
    border: ${({ theme }) => `2px solid ${theme.colors.red}`};
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;

export const BlueButton = styled(ButtonCustom)`
  &.MuiButton-root {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.lightBlue};
    border: ${({ theme }) => `2px solid ${theme.colors.lightBlue}`};
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;

export const InfoButton = styled(ButtonCustom)`
  &.MuiButton-root {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkBlue};
    border: ${({ theme }) => `2px solid ${theme.colors.white}`};
    font-size: 15px;
    height: ${(props) => props.height || '45px'};
    width: ${(props) => props.width || '90px'};
  }
`;

export const DeleteButton = styled(ButtonCustom)`
  &.MuiButton-root {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.red};
    border: ${({ theme }) => `2px solid ${theme.colors.white}`};
    font-size: 15px;
    height: ${(props) => props.height || '45px'};
    width: ${(props) => props.width || '90px'};
  }
`;
