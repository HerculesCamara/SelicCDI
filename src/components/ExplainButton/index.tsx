import { useState } from 'react'
import { Container, InfoBtt, Tooltip, TooltipContent } from './styles'

import CloseImg from '../../assets/close.svg'

interface ExplainButtonProps {
  tooltipContent?: string
}

export function ExplainButton() {
  const [toggle, setToggle] = useState(false)

  return (
    <Container>
      <Tooltip onClick={() => setToggle(!toggle)} isActive={toggle}>
        <TooltipContent>
          <img src={CloseImg} alt="" />
          <span>
            Aqui é para ter um texto explicando pra que serve o campo.
          </span>
        </TooltipContent>
      </Tooltip>
      <InfoBtt onClick={() => setToggle(!toggle)} isActive={toggle}>
        <span>i</span>
      </InfoBtt>
    </Container>
  )
}
