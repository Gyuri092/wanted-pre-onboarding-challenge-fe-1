import React from 'react';
import styled from 'styled-components';

const SubTodoContainer = styled.div`
  width: 30%;
  height: 100%;
  border: 2px solid #b59ef5;
  box-sizing: border-box;
`;
const SubTodoLabel = styled.div`
  width: 100%;
  height: 4%;
  background-color: #eae0f6;
  color: #3a1a91;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  box-sizing: border-box;
`;
function SubTodo() {
  return (
    <SubTodoContainer>
      <SubTodoLabel>Todo List</SubTodoLabel>
    </SubTodoContainer>
  );
}

export default SubTodo;
