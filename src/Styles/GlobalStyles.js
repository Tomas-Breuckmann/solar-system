import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  :root {
      //cinza
      --g1: rgba(245, 250, 247, 1);
      --g2: rgba(235, 240, 237, 1);
      --g3: rgba(220, 224, 222, 1);
      --g4: rgba(200, 204, 202, 1);
      --g5: rgba(180, 184, 182, 1);
      --g6: rgba(200, 204, 202, 1);
      --g6: rgba(160, 163, 162, 1);
      --g7: rgba(120, 122, 121, 1);
      --g8: rgba(100, 102, 101, 1);
      --g9: rgba(80, 82, 81, 1);
      --g10: rgba(60, 61, 61, 1);
      --g11: rgba(40, 41, 40, 1);
      --g12: rgba(20, 20, 20, 1);
      --g13: rgba(5, 5, 5, 1);
      // AZUL
      --darkBlue: #00021C;

      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
    }
`;

export default Global;
