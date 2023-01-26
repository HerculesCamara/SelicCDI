import { ExplainButton } from '../ExplainButton'
import { InputContent, InputLabel, InputTextContainer } from './styles'

interface InputtextProps {
  Title?: string,
  explain?: string
}

export function ModalInputText() {
  return (
    <InputTextContainer>
      <InputLabel>
        <label>Valor inical</label>
        <ExplainButton />
      </InputLabel>
      <InputContent>
        <span>R$</span>
        <input type="text" placeholder="0,00" />
      </InputContent>
    </InputTextContainer>
  )
}
