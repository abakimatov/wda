import styled from 'styled-components'

export const AppHeader = styled.section`
  background: #3464ab;
  display: grid;
  background: #3464ab;
  grid-template-columns: 1fr 220px;
  .data-app-header-col-1 {
    align-self: center;
    text-align: center;
    div {
      font-weight: 500;
      font-size: 16px;
      color: #dfe6f0;
    }
  }
  .data-app-header-col-2 {
    background: transparent;
    border-left: 1px solid #dfe6f0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
