import { useState } from 'react'
import { Container, InfoBtt, Tooltip, TooltipContent } from './styles'

import CloseImg from '../../assets/close.svg'

interface ExplainButtonProps {
  tooltipExplain?: string
}

export function ExplainButton({ tooltipExplain }: ExplainButtonProps) {
  const [toggle, setToggle] = useState(false)

  return (
    <Container>
      <Tooltip onClick={() => setToggle(!toggle)} isActive={toggle}>
        <TooltipContent>
          <img src={CloseImg} alt="" />
          <span>{tooltipExplain}</span>
        </TooltipContent>
      </Tooltip>
      <InfoBtt onClick={() => setToggle(!toggle)} isActive={toggle}>
        <span>i</span>
      </InfoBtt>
    </Container>
  )
}
