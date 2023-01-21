import { Container, Content } from './styles'

export function Explanation() {
  return (
    <Container>
      <Content>
        <p>
          Atualmente a Selic está 13,75% e o CDI 13,50%. Se ouve muito falar
          sobre a Selic e sobre o CDI, mas você sabe o são?
        </p>
        <h2>O que é SELIC?</h2>
        <p>
          A <strong>Selic</strong> é a taxa base de juros da economia. É o
          principal fator de política monetária utilizado pelo Banco Central
          (BC) para controlar a inflação.
        </p>
        <p>
          Ela influencia todas as taxas de juros do país, como as taxas de juros
          dos empréstimos, dos financiamentos e das aplicações financeiras. Se
          ela aumenta, logo, todas as modalidades de crédito ficam mais caras,
          mas se a taxa diminui, as depesas dos bancos e das financeiras também
          caem, possibilitando uma oferta uma oferta de crédito mais barata.
        </p>
        <p>
          A sigla <strong>Selic</strong> significa:{' '}
          <strong>Sistema Especial de Liquidação e de Custódia</strong>.
        </p>

        <h2>O que é CDI?</h2>
        <p>
          O <strong>CDI</strong>, ou{' '}
          <strong>Certificado de Depósito Interbancário</strong>, são títulos
          emitidos quando instituições financeiras vão transferir recursos entre
          si, por um curto período.
        </p>
        <p>
          Por ser utilizado como uma forma dos bancos realizarem empréstimos
          entre si, através desse título,a instituição que tem mais recursos
          pode financiar aquelas que estão precisando de dinheiro,
          possibilitando que cada instituição feche o dia com caixa positivo e o
          sistema bancário se mantenha equilibrado.
        </p>

        <h3>Referências: </h3>
        <p>Selic:</p>
        <ul>
          <li>
            <a href="https://www.bcb.gov.br/controleinflacao/taxaselic">
              https://www.bcb.gov.br/controleinflacao/taxaselic
            </a>
          </li>
          <li>
            <a href="https://ajuda.ton.com.br/taxas-e-prazos/o-que-%C3%A9-a-taxa-selic">
              https://ajuda.ton.com.br/taxas-e-prazos/o-que-%C3%A9-a-taxa-selic
            </a>
          </li>
        </ul>

        <p>CDI:</p>
        <ul>
          <li>
            <a href="https://artigos.toroinvestimentos.com.br/o-que-e-cdi-taxa-mensal">
              https://artigos.toroinvestimentos.com.br/o-que-e-cdi-taxa-mensal
            </a>
          </li>
        </ul>
      </Content>
    </Container>
  )
}
