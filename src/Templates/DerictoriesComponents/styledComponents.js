import styled from 'styled-components'
const borderFields = '1px solid #5787D1;'
export const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin: 5px 0px;
`
export const InputText = styled.input`
  width: -webkit-fill-available;
  padding: 0px 5px;
  outline: none;
  border: none;
  border: ${borderFields};
  border-radius: 0px;
  color: #000;
  font-weight: 500;
  font-size: 14px;
  height: 30px;
  background: #fff;
  &:focus {
    background: #fff;
  }
`
export const InputTextArea = styled.textarea`
  width: -webkit-fill-available;
  padding: 5px;
  outline: none;
  border: none;
  border: ${borderFields};
  border-radius: 0px;
  color: #000;
  font-weight: 500;
  font-size: 14px;
  resize: none;
`
export const DevExpressTableWrapper = styled.div`
  display: flex;
  height: 100%;
  background: #fff;
`
export const DevExpressTableGrid = styled.section`
  height: 100%;
  display: grid;
  /* padding: 10px; */
  background: #fff;
  grid-template-columns: 1fr;
  grid-template-rows: fit-content(100%) fit-content(100%) auto;
  grid-template-areas:
    'toolbar'
    'header'
    'content';
  .dev-exp-table-grid-item-1 {
    grid-area: toolbar;
  }
  .dev-exp-table-grid-item-2 {
    grid-area: header;
    border-top: 1px solid #dfe6f0;
  }
  .dev-exp-table-grid-item-3 {
    grid-area: content;
    border-top: 1px solid #dfe6f0;
  }
`
export const CustomDivSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
  font-weight: 500;
  font-size: 14px;
`
export const CustomDivSelectSubWrapper = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const CustomCheckBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
  font-weight: 500;
  font-size: 14px;
`
export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  border-right: 1px solid blue;
  button {
    display: flex;
    justify-content: flex-start;
  }
`
export const DialogStateLessGridSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`
