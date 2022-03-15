import styled from 'styled-components';
import Chip from '@mui/material/Chip';
import theme from 'styles/theme';

interface ChipProps {
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

const ChipStyle = styled(Chip) <ChipProps>`
  &.MuiChip-root {
    height: ${(props) => props.height || '35px'};
    width: ${(props) => props.width || '95px'};
    letter-spacing: ${(props) => props.letterSpacing || '1.25px'};
    text-transform: ${(props) => props.textTransfrom || 'uppercase'};
    border-radius: ${(props) => props.borderRadius || '51px'};
    font-size: ${(props) => props.font || '14px'};
    font-weight: ${(props) => props.fontWeight || '500'};
    margin: ${(props) => props.margin || '1'};
    color: ${(props) => props.textColor || (({ theme }) => theme.colors.white)};
    align-self: ${(props) => props.alignSelf || 'auto'};
    font: ${theme.fonts.regular};
    font-size: 14px;
  }
`;

export const ChipFinal = styled(ChipStyle)`
  &.MuiChip-root {
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `2px solid ${theme.colors.darkBlue}`};
  }
`;
