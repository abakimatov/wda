import styled from "styled-components";

export const StatusConnected = styled.div`
height: 100%;
margin-left: 10px;
font-style: normal;
font-weight: normal;
font-size: 18px;
display: flex;
align-items: center;
div {
  display: flex;
  align-items: center;
}
.w_status_connected {
  height: 100%;
  .indicator {
    width: 22px;
    height: 100%;
    position: relative;
  }
}
`
export const ActiveConnected = styled.div`
width: 11px;
height: 11px;
border-radius: 50%;
background: lightgreen;
margin-left: 5px;
position: absolute;
top: 0;
right: 0;
`
export const OffConnected = styled.div`
width: 11px;
height: 11px;
border-radius: 50%;
background: red;
margin-left: 5px;
position: absolute;
top: 0;
right: 0;
`
export const TitleDiv = styled.div`
font-style: normal;
font-weight: 500;
font-size: 24px;
color: #FFFFFF;
`
export const TitleCenter = styled.div`
font-style: normal;
font-weight: normal;
font-size: 18px;
`