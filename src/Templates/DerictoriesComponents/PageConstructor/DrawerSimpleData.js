import React, { memo } from 'react'
import styled from 'styled-components'
import { DrawerSimleDataButton } from '../../Buttons'

export const DrawerSimpleData = memo(({ drawersItems }) => {
  return (
    <Wrapper>
      {drawersItems &&
        drawersItems.map((item, index) => (
          <DrawerSimleDataButton
            key={index}
            text={item.name}
            onClick={item.method}
          />
        ))}
    </Wrapper>
  )
})
//wrappers
const Wrapper = styled.section`
  height: 100%;
  background: #ffffff;
  padding: 5px;
  border-right: 1px solid #dfe6f0;
`
