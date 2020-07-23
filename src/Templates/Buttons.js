import React, { memo } from 'react'
import {
  SSaveButton,
  SСancelButton,
  SDrawerSimleDataButton,
  STemplateButton,
} from './styledComponents'

export const SaveButton = memo(({ onClick }) => (
  <SSaveButton onClick={() => onClick()}>{'Сохранить'}</SSaveButton>
))
export const CancelButton = memo(({ onClick }) => (
  <SСancelButton onClick={() => onClick()}>{'Отмена'}</SСancelButton>
))
export const DrawerSimleDataButton = memo(({ onClick, text }) => (
  <SDrawerSimleDataButton onClick={() => onClick()}>
    {text}
  </SDrawerSimleDataButton>
))
export const TemplateButton = memo((props) => {
  return (
    <STemplateButton
      onClick={() => {
        if (props.onClick) props.onClick()
        else return
      }}
    >
      {props.text}
    </STemplateButton>
  )
})
