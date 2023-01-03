import React from 'react';
import MainTodo from 'components/MainTodo';
import SubTodo from 'components/SubTodo';
import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

function Todo() {
  return (
    <TodoContainer>
      <SubTodo />
      <MainTodo />
    </TodoContainer>
  );
}

export default Todo;
