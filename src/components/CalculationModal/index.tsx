import Modal from 'react-modal'
import { Container } from './stykes'

interface CalcInvestmentModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function CalculationModal({
  isOpen,
  onRequestClose
}: CalcInvestmentModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <span>🤕</span>
        <p>Essa função ainda não foi implementada</p>
      </Container>
    </Modal>
  )
}
