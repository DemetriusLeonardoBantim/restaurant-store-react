import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Food from '../../assets/imgFood.jpg';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import api from '../../services/api';
import { useFood } from '../../hooks/useFood';

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export function Store() {
  const [isAvailable, setIsAvailable] = useState(true);
  const { foods, removeFood } = useFood();

  function mudarValor() {
    setIsAvailable(!isAvailable);
  }

  function handleRemoveFood(productId: number) {
    removeFood(productId);
    api.delete(`foods/${productId}`);
  }

  return (
    <Container>
      {foods.map((food) => {
        return (
          <div key={food.id}>
            <header>
              <img src={food.image && food.image} alt="" />
            </header>
            <section>
              <h1>{food.name}</h1>
              <p>{food.description}</p>
              <h2 className="price">R$ {food.price}</h2>
            </section>
            <section className="footer">
              <div className="icon-container">
                <button type="button" className="icon">
                  <FiEdit3 size={20} />
                </button>
                <button
                  type="button"
                  className="icons"
                  onClick={() => handleRemoveFood(food.id)}
                >
                  <FiTrash size={20} />
                </button>
              </div>
              <div className="availability-container">
                <p>{food.available ? 'Disponível' : 'Indisponível'}</p>

                <label className="switch">
                  <input type="checkbox" onChange={(e) => !food.available} />
                  <span className="slider" />
                </label>
              </div>
            </section>
          </div>
        );
      })}
    </Container>
  );
}
