import styled from 'styled-components'
export const AppMenu = styled.section`
  background: yellow;
  display: grid;
  grid-template-columns: 80px;
  grid-auto-rows: 40px 1fr;
  .data-app-menu-col-1 {
    background: #19478a;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px 15px;
    .data-app-menu-col-1-content-1 {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      position: relative;
    }
    .data-app-menu-col-1-content-2 {
      height: 18px;
      width: 100%;
      text-align: left;
      font-weight: 900;
      font-size: 18px;
      color: #dfe6f0;
    }
  }
  .data-app-menu-col-2 {
    background: #2a579a;
    display: grid;
    grid-template-rows: 80px 80px 80px 80px auto;
  }
`
export const Drawer = styled.section`
  width: 300px;
  position: absolute;
  top: 0px;
  left: 120px;
  background: #3e6db6;
`
export const StatusConnected = styled.div`
  position: absolute;
  top: -4px;
`
export const ActiveConnected = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: lightgreen;
`
export const OffConnected = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: red;
`
