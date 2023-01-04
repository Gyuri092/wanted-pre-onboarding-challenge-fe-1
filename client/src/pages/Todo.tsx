import React from 'react';
import MainTodo from '../components/MainTodo';
import SubTodo from '../components/SubTodo';
import styled from 'styled-components';
import Nav from '../pages/Nav';
const TodoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
function Todo() {
  return (
    <Container>
      <Nav />
      <TodoContainer>
        <SubTodo />
        <MainTodo />
      </TodoContainer>
    </Container>
  );
}

export default Todo;
