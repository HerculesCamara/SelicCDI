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

        <ModalInputText />
        <ModalInputText />

        <InputSelectContainer>
          <ModalSelectAndInput />
          <ModalSelectAndInput />
        </InputSelectContainer>
        

        <ModalCalcResult />

        <CalcButton>Calcular</CalcButton>

        <NextCalcOption>Calcular a partir de uma meta</NextCalcOption>
      </Container>
    </Modal>
  )
}
