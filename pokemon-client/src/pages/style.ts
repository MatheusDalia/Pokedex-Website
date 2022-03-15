import styled from 'styled-components';

export const GodContainer = styled.div``;

export const Container = styled.div`
  height: 100vh;

  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Content = styled.div`
  max-height: 625px;

  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const FormInputs = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Options = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  p:hover {
    color: #51e678;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const InputAndTexts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProvidersDiv = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-between;
  img:hover {
    cursor: pointer;
  }
`;
