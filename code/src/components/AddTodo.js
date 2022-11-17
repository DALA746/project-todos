import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import todos from '../reducers/todos';
import {
  AddTodoContainer,
  Input,
  AddButton,
  Select,
  SelectContainer,
} from '../styled-components/AddTodoStyling';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(
      todos.actions.addTodo({
        id: uniqid(),
        text: input,
        category: category,
        isComplete: false,
      })
    );

    setInput('');
    setCategory('');
  };

  return (
    <>
      <h2>Let's have a productive day today</h2>
      <AddTodoContainer>
        <Input
          props={input.length}
          type='text'
          placeholder='Add todo...'
          value={input}
          onChange={(event) => setInput(event.target.value)}
          maxLength={100}
        />
        <SelectContainer>
          <Select
            value={category}
            onChange={(event) => setCategory(event.target.value)}>
            <option value=''>Category...</option>
            <option value='Work'>Work</option>
            <option value='Studies'>Studies</option>
            <option value='Family & Friends'>Family</option>
            <option value='Health'>Health</option>
            <option value='Other'>Other</option>
          </Select>
        </SelectContainer>
        <AddButton onClick={onAddTodo} disabled={input === ''}>
          <i className='fas fa-plus'></i>
        </AddButton>
      </AddTodoContainer>
    </>
  );
};

export default AddTodo;
