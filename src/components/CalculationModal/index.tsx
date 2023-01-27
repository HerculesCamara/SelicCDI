import Modal from 'react-modal'
import { ModalInputText } from '../ModalInputText'
import { ModalSelectAndInput } from '../ModalSelectAndInput'
import {
  Container,
  CalcButton,
  CloseButton,
  InputSelectContainer,
  NextCalcOption
} from './styles'

import CloseImg from '../../assets/close.svg'
import { ModalCalcResult } from '../ModalCalcResult'

interface CalcInvestmentModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function CalculationModal({
  isOpen,
  onRequestClose
}: CalcInvestmentModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <CloseButton>
          {' '}
          <img src={CloseImg} alt="" />{' '}
        </CloseButton>

        <ModalInputText
          title="Valor inicial"
          explain="Valor com que você vai começar a investir. (Obs: pode ser R$ 0,00)"
        />
        <ModalInputText
          title="Investimento mensal"
          explain="Valor que você pretende invertir todos os meses."
        />

        <InputSelectContainer>
          <ModalSelectAndInput
            title="Período"
            explain="Digite por quanto tempo você prentender investir. (Ex: por 2 anos)"
          />
          <ModalSelectAndInput
            title="Intervalo"
            explain="Digite de quanto em quanto tempo você pretende aportar. (Ex: a cada 1 mês)"
          />
        </InputSelectContainer>

        <ModalCalcResult />

        <CalcButton>Calcular</CalcButton>

        <NextCalcOption>Calcular a partir de uma meta</NextCalcOption>
      </Container>
    </Modal>
  )
}
