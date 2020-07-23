import { css } from 'styled-components';
export const scrollTemplate = css`
  overflow-y: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 1px;
    height: 0;
  }
  ::-webkit-scrollbar-track {
    margin: 10px 0 53px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  :hover::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
  }
`;