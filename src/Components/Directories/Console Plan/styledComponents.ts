import styled, { css } from 'styled-components'
import { scrollTemplate } from '../../../Templates/scrollTemplate'
//background: linear-gradient(180deg, #ffffff 0%, #eeeeee 100%);
const heightToolbarButton = '40px'
const border = css`
  border: 1px solid #dfe6f0;
`
const tempButton = css`
  border: none;
  outline: none;
  text-transform: none;
  background: linear-gradient(180deg, #ffffff 0%, #eeeeee 100%);
  border: 1px solid #c8c8c8;
  box-sizing: border-box;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.18);
  border-radius: 4px;
`
export const TargetButton = styled.button`
  ${tempButton};
`

export const GridHeader = styled.section`
  height: calc(100% - 90px);
  .toolbar_button {
    height: ${heightToolbarButton};
  }
  font-size: 12px;
`
export const Toolbar = styled.section`
  height: ${heightToolbarButton};
  margin: 5px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  .data-console-toolbar-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .data-console-toolbar-item-div {
      align-self: center;
      text-align: center;
    }
  }
`
export const Title = styled.section`
  padding: 5px;
  text-align: center;
  background: #3e6db6;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  color: #fff;
  max-height: 20px;
`
/* 
WConsole 
border: 1px solid #DFE6F0;
height: calc(100% - 90px);
 */
export const WConsole = styled.section`
  height: calc(100% - ${heightToolbarButton});
  margin: 5px 10px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: repeat(1, minmax(100%, 100%));
  grid-gap: 5px;
`
export const RightBar = styled.section`
  ${border};
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  .board-1 {
    ${border};
    ${scrollTemplate};
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .board-2 {
    ${border};
    ${scrollTemplate};
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const Body = styled.section`
  ${scrollTemplate};
  .board-drop-target-1 {
    width: 100%;
    height: 100%;
    display: grid;
    border-radius: 4px;
    .Collapsible {
      display: grid;
    }
  }
  .board-drop-target-2 {
    display: grid;
    grid-auto-rows: 40px;
    grid-gap: 5px;
    ${scrollTemplate};
    border-radius: 4px;
    padding: 5px;
  }
  .board-drop-target-3 {
    display: grid;
    grid-auto-rows: 40px;
    grid-gap: 5px;
    ${scrollTemplate};
    border-radius: 4px;
    padding: 5px;
  }
`
export const LeftBar = styled.section`
  ${border};
  ${scrollTemplate};
  .board-3 {
    ${border};
    ${scrollTemplate};
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const WDragTarget = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px auto;
`
export const Loader = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px;
`
export const TargetItem = styled.div`
  opacity: 1;
  border: 1px solid #c8c8c8;
  text-align: left;
  padding: 5px;
  margin: 1px 0px;
  background: #fff;
`
/* 
export const Body = styled.section`
  ${scrollTemplate};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 300px;
  grid-gap: 5px;
  .board-drop-target-1 {
    width: 100%;
    height: 100%;
    display: grid;
    border-radius: 4px;
  }
  .board-drop-target-2 {
    display: grid;
    grid-auto-rows: 40px;
    grid-gap: 5px;
    ${scrollTemplate};
    border-radius: 4px;
    padding: 5px;
  }
  .board-drop-target-3 {
    display: grid;
    grid-auto-rows: 40px;
    grid-gap: 5px;
    ${scrollTemplate};
    border-radius: 4px;
    padding: 5px;
  }
`; */
