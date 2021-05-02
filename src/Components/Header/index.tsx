import React from 'react';
import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import { VscAdd } from 'react-icons/vsc';

interface HeaderProps {
  onOpenNewFoodModal: () => void;
}

export function Header({ onOpenNewFoodModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="go" />
        <nav>
          <button type="button" onClick={onOpenNewFoodModal}>
            Novo prato <VscAdd size={24} />
          </button>
        </nav>
      </Content>
    </Container>
  );
}
