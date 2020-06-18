import styled from 'styled-components';

/**
 *  HE => Header
 *  MA => Main
 *  FO => Footer
 */

export const Grid = styled.div`
  @media screen and (max-width: 480px){
    grid-template-columns: 90%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px){
    grid-template-columns: 80%;
  }

  display: grid;
  justify-content: center;

  grid-template-columns: 900px;
  grid-template-rows: 64px auto auto;

  grid-template-areas: 'HE' 'MA' 'FO';  
`;
