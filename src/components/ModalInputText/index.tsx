import { ExplainButton } from '../ExplainButton'
import { InputContent, InputLabel, InputTextContainer } from './styles'

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
