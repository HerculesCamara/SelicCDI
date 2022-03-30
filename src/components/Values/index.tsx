import { Container, Content, Understand } from './styles'

import arrowSvg from '../../assets/arrow.svg'

export function Values() {
  const handleClickButton = () => {
    document.getElementById('explain-content')?.scrollIntoView()
  }

  return (
    <Container>
      <Content>
        <div>
          <h1>Selic</h1>
          <h2>11,75%</h2>
        </div>
        <div>
          <p>&amp;</p>
        </div>
        <div>
          <h1>CDI</h1>
          <h2>11,65%</h2>
        </div>
      </Content>
      <Understand onClick={handleClickButton}>
        <p>Entenda o que é</p>
        <img
          src={arrowSvg}
          alt="Ícone do botão entenda o que é. Seta apontando para baixo."
        />
      </Understand>
    </Container>
  )
}
