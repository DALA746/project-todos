import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ListSection,
  TodoListDiv,
  Button,
  CategorySpan,
  TextSpan,
} from '../styled-components/ListStyle';
import todos from '../reducers/todos';
import NoTodos from '../components/NoTodos';
import ClearAllButton from '../components/ClearAllButton';

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const finishedTodoLength = items.filter((item) => item.isComplete).length;

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  if (items.length === 0) {
    return <NoTodos />;
  }

  return (
    <ListSection>
      <h2>
        <i className='fas fa-list-alt'></i> Todo List
      </h2>
      <p>
        {finishedTodoLength === items.length
          ? 'Whooho! Good job! '
          : `${finishedTodoLength} of ${items.length} todos is completed!`}
      </p>

      {items.map((item) => (
        <TodoListDiv key={item.id} isComplete={item.isComplete}>
          <TextSpan>{item.text}</TextSpan>
          <div>
            <CategorySpan category={item.category}>
              {item.category}
            </CategorySpan>
            <Button green onClick={() => onToggleTodo(item.id)}>
              <i className='fas fa-check'></i>
            </Button>
            <Button red onClick={() => onDeleteTodo(item.id)}>
              <i className='fas fa-trash'></i>
            </Button>
          </div>
        </TodoListDiv>
      ))}
      <ClearAllButton />
    </ListSection>
  );
};

export default TodoList;
