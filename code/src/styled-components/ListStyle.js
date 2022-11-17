import styled from 'styled-components';

export const ListSection = styled.section``;

export const TodoListDiv = styled.div`
  background-color: var(--orange);
  padding: 8px;
  border-radius: 20px;
  margin-bottom: 10px;
  word-wrap: break-word;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(170, 170, 170);
  opacity: ${(props) => (props.isComplete ? '0.6' : '1')};
  text-decoration: ${(props) => (props.isComplete ? 'line-through' : '')};

  span {
    margin: 10px;
  }
`;

export const ListDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  word-wrap: break-word;
  justify-content: space-between;
  opacity: ${(props) => (props.completed ? 0.3 : 1)};
  opacity: 0.7;
`;
/* combine those two in one*/
export const Button = styled.button`
  background-color: ${(props) => (props.red ? 'var(--red)' : 'var(--green)')};
  border: none;
  height: 40px;
  width: 50px;
  border-radius: 10px;
  margin: 5px;
  color: white;
  font-size: 20px;
`;

export const ButtonDelete = styled.button`
  background-color: var(--red);
  border: none;
  color: white;
  height: 50px;
  width: 60px;
  font-size: 20px;
`;

export const CategorySpan = styled.span`
  padding: 5px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 14px;
  background-color: ${(props) => (props.category ? 'var(--white)' : 'none')}; ;
`;

export const TextSpan = styled.span`
  padding: 5px;
`;
