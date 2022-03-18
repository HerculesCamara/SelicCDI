import LogoImg from '../../assets/Selic&CDI.png'
import { ButtonHeader } from '../ButtonHeader'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={LogoImg} />
        <ButtonHeader />
      </Content>
    </Container>
  )
}
