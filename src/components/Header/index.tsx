import LogoImg from '../../assets/Selic&CDI.png'
import { Container, Content, Button } from './styles'

interface ModalProps {
  onOpenNewTransationModal: () => void
}

export function Header({ onOpenNewTransationModal }: ModalProps) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="logo SelicCDI. Texto: Selic e Cdi" />
        <Button onClick={onOpenNewTransationModal}>Calcular</Button>
      </Content>
    </Container>
  )
}
