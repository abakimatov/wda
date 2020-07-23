import styled from 'styled-components'
// 240px 1fr
export const WContent = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
`
export const LoadingDocument = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 5px 0px;
  padding: 5px 5px;
  div {
    padding: 5px;
    width: 50%;
  }
`
