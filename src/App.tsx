import { Values } from './components/Values'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { Explanation } from './components/Explanation'
import Modal from 'react-modal'
import { useState } from 'react'
import { CalculationModal } from './components/CalculationModal'
import { Footer } from './components/Footer'

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

      <CalculationModal
        isOpen={isNewCalculationModalOpen}
        onRequestClose={handleCloseNewCalculationModal}
      />

      <Values />
      <Explanation />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App
