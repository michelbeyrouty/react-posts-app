import styled from 'styled-components';

export const MainWrapper = styled.main`
  height: calc(100vh - 35px);
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto;
  max-width: 1000px;

  font-family: ${({ theme }) => theme.fonts[0]};
  background-color: ${({ theme }) => theme.colors.white};
`;
