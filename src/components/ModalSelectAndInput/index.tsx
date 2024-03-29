import { ExplainButton } from '../ExplainButton'
import { Container, InputLabel, InputsContent, SelectContainer } from './styles'

import arrowSvg from '../../assets/arrow_gray.svg'

interface SelectInputProps {
  title?: string
  explain?: string
}

export function ModalSelectAndInput({ title, explain }: SelectInputProps) {
  return (
    <Container>
      <InputLabel>
        <label>{title}</label>
        <ExplainButton tooltipExplain={explain} />
      </InputLabel>
      <InputsContent>
        <input type="text" placeholder="0" />
        <SelectContainer>
          <select name="periods" id="periods">
            <option value="Ano">Ano</option>
            <option value="Mes">Mes</option>
            <option value="Semana">Semana</option>
            <option value="Dia">Dia</option>
          </select>
          {/* <img src={arrowSvg} alt="" /> */}
        </SelectContainer>
      </InputsContent>
    </Container>
  )
}
