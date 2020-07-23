import styled from 'styled-components'

export const CustomFallback = styled.div`
  width: 20%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
`
export const AppGrid = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: 80px 1fr;
  .data-app-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 40px 1fr;
  }
  .data-app-content {
    overflow-y: scroll;
    background: #e5e5e5;
    padding: 10px;
  }
`
