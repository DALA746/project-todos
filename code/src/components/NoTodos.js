import React from 'react';
import styled from 'styled-components';
import image from '../img/good_work.png';

const NotodosContainer = styled.div`
  text-align: center;
  margin: 20px auto;
  color: rgb(170, 170, 170);

  i {
    font-size: 40px;
  }

  div {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const NoTodos = () => {
  return (
    <NotodosContainer>
      <p>No tasks at the moment!</p>
      <div>
        <img src={image} alt='notodos' />
      </div>
    </NotodosContainer>
  );
};

export default NoTodos;
