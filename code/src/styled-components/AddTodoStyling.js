import styled from 'styled-components';

export const AddTodoContainer = styled.section`
  gap: 10px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  padding: 10px;
  border-bottom: 1px solid var(--dark);
  width: 100%;
  max-width: 363px;

  ::placeholder {
    color: var(--dark);
    font-family: var(--font-family);
  }
`;

export const AddButton = styled.button`
  max-width: 50px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: var(--green);
  color: var(--white);
  padding: 8px;
  font-size: 20px;
`;

export const Select = styled.select`
  height: 40px;
  padding: 0 6px;
  color: var(--dark);
  border-radius: 5px;
  border: 1px solid var(--dark);
  width: 100%;
`;

export const SelectContainer = styled.div`
  width: 100%;
  max-width: 200px;
`;
