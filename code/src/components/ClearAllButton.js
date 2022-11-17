import React from 'react';
import todos from '../reducers/todos';
import { useDispatch } from 'react-redux';
import {
  ClearButtonContainer,
  ClearButton,
} from '../styled-components/ClearAllButtonStyling';

const ClearAllButton = () => {
  const dispatch = useDispatch();

  const clearAllTodos = () => {
    dispatch(todos.actions.clearAllTodos());
    localStorage.clear();
  };

  return (
    <ClearButtonContainer>
      <ClearButton onClick={clearAllTodos}>
        CLEAR ALL <i className='fas fa-trash'></i>
      </ClearButton>
    </ClearButtonContainer>
  );
};

export default ClearAllButton;
