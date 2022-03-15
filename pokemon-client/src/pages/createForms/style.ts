import styled from 'styled-components';
import theme from '../../styles/theme';

export const GodContainer = styled.div``;

export const GreenText = styled.span`
  color: #51e678;
  &:hover {
    color: #51e678;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const GreenTextBold = styled.span`
  color: #51e678;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    color: #51e678;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  margin-top: 310px;
  width: 100vw;
  height: 100vh;
  font: ${theme.fonts.bold};
  justify-content: center;
  align-items: center;
  display: flex;
  @media (max-height: 702px) {
    margin-top: 390px;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 500px;
  margin-top: 3%;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-height: 812px) {
    margin-top: 12%;
  }
`;

export const FormInputs = styled.div`
  width: 100%;
  height: 48%;
  margin-top: 4%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-direction: column;
`;

export const PhraseAdjust = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 48%;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Underline = styled.div`
  p:hover {
    color: #51e678;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const InputAndTexts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
export const Password = styled.div`
  width: 48%;
`;

export const StrenghtBarSize = styled.div`
  margin-top: 3%;
  width: 100%;
`;

export const Checkboxes1 = styled.div`
  display: flex;
  margin-top: 5%;
  align-items: center;
  justify-content: space-between;
`;

export const Checkboxes2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10%;
`;

export const CheckGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 104px;
`;

export const ProvidersDiv = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-between;
  margin-top: 8%;
  img:hover {
    cursor: pointer;
  }
`;
