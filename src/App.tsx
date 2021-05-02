import React, { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './Components/Header/index';
import { GlobalStyle } from './styles/global';
import { Store } from './Components/Store';
import { NewFoodModal } from './Components/NewFoodModal';
import { FoodProvider } from './hooks/useFood';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewFoodModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewFood() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <FoodProvider>
      <Header onOpenNewFoodModal={handleOpenNewFoodModal} />
      <NewFoodModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewFood}
      />
      <Store />
      <GlobalStyle />
    </FoodProvider>
  );
}

export default App;
