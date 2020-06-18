import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MA;
  display: flex;

  flex-direction: column;
  align-items: center;

  color: var(--secondary);
  margin: 128px 0;

  h1 {
    margin: 16px 0;
    font-size: 48px;
    text-align: center;
  }

  p {
    font-size: 24px;
    margin: 48px 0 8px 0;
  }

  small {
    font-size: 16px;
    color: var(--maya);
  }
`;
