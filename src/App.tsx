import { Values } from './components/Values'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { Explanation } from './components/Explanation'
import Modal from 'react-modal'
import { useState } from 'react'

/* Selic hoje
CDI hoje
O que Selic
O que CDI
SELIC E CDI
SELIC OU CDI
SELIC vs CDI 
Selic e CDI hoje*/

Modal.setAppElement('#root')

function App() {
  const [isNewCalculationModalOpen, setIsNewCalculationModalOpen] =
    useState(false)

  function handleOpenNewCalculationModal() {
    setIsNewCalculationModalOpen(true)
  }

  function handleCloseNewCalculationModal() {
    setIsNewCalculationModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransationModal={handleOpenNewCalculationModal} />

      <Modal
        isOpen={isNewCalculationModalOpen}
        onRequestClose={handleCloseNewCalculationModal}
      >
        <h2>Teste</h2>
      </Modal>

      <Values />
      <Explanation />
      <GlobalStyle />
    </>
  )
}

export default App
