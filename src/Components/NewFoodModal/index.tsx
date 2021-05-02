import React, { useState, FormEvent, useContext } from 'react';
import Modal from 'react-modal';
import { Container } from './style';
import { useFood } from '../../hooks/useFood';

interface NewFoodModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewFoodModal({ isOpen, onRequestClose }: NewFoodModal) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const { createFood } = useFood();
  console.log(createFood);

  async function handleCreateNewFood(event: FormEvent) {
    event.preventDefault();
    await createFood({
      name,
      description,
      price,
      image,
    });
    console.log('oi');
    setImage('');
    setName('');
    setPrice(0);
    setDescription('');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewFood}>
        <h2>Cadastrar transacao</h2>
        <input
          placeholder="Cole o link aqui"
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <input
          placeholder="Ex: Moda Italina"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Ex: 19.90"
          type="number"
          value={price}
          onChange={(event) => setPrice(Number(event.target.value))}
        />
        <input
          placeholder="Descricao"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Adicionar prato</button>
      </Container>
    </Modal>
  );
}
