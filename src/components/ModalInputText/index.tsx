import { ExplainButton } from '../ExplainButton'
import { InputContent, InputLabel, InputTextContainer } from './styles'

interface InputTextProps {
  title?: string,
  explain?: string,
}

export function ModalInputText({ title, explain }: InputTextProps) {

  return (
    <InputTextContainer>
      <InputLabel>
        <label>{title}</label>
        <ExplainButton tooltipExplain={explain} />
      </InputLabel>
      <InputContent>
        <span>R$</span>
        <input type="text" placeholder="0,00" />
      </InputContent>
    </InputTextContainer>
  )
}
