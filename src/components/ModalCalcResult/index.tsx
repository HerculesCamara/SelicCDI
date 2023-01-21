import { Container, Content, Label } from './styles'

export function ModalCalcResult() {
  return (
    <Container>
      <Label>Total</Label>
      <Content>
        <span>R$</span>
        <span>0,00</span>
      </Content>
    </Container>
  )
}
