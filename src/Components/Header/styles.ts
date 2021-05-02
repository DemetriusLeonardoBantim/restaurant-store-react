import styled from 'styled-components';

export const Container = styled.header`
  background: #c72828;
  padding: 30px 0;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    button {
      font-size: 1rem;
      background: #39b100;
      color: #fff;
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      display: flex;
      align-items: center;
      transition: filter 0.2s;
      svg {
        margin-left: 10px;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
