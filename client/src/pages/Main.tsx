import React from 'react';
import Nav from './Nav';
import Todo from './Todo';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

function Main() {
  return (
    <MainContainer>
      <Todo />
    </MainContainer>
  );
}

export default Main;
