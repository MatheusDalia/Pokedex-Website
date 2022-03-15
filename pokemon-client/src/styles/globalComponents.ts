import styled from 'styled-components';

interface TextProps {
  size?: string;
  align?: string;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  regular?: boolean;
  primary?: boolean;
  secondary?: boolean;
  dark?: boolean;
  grey?: boolean;
  grey2?: boolean;
  grey4?: boolean;
  red?: boolean;
  green?: boolean;
  black?: boolean;
  margin?: string;
  padding?: string;
  width?: string;
  white?: boolean;
  alignSelf?: string;
  opacity?: number;
}

export const CustomText = styled.p<TextProps>`
  text-align: ${(props) => props.align || 'center'};
  font-size: ${(props) => props.size} !important;
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  width: ${(props) => props.width || 'auto'};
  font: ${(props) =>
    ({ theme }) =>
      (props.bold && theme.fonts.bold) ||
      (props.semiBold && theme.fonts.semi_bold) ||
      (props.medium && theme.fonts.medium) ||
      (props.regular && theme.fonts.regular) ||
      theme.fonts.regular};
  color: ${(props) =>
    ({ theme }) =>
      (props.black && theme.colors.black) ||
      (props.lightBlue && theme.colors.lightBlue) ||
      (props.white && theme.colors.white) ||
      (props.green && theme.colors.green) ||
      theme.colors.green};
  align-self: ${(props) => props.alignSelf || 'auto'};
  opacity: ${(props) => props.opacity || 1};
`;
