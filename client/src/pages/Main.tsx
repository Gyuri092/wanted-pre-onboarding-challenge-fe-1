import React from 'react';
import Nav from './Nav';
import Todo from './Todo';
import styled from 'styled-components';
import { ImWarning } from 'react-icons/im';
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 50px;
  box-sizing: border-box;
`;
function Main() {
  return (
    <MainContainer>
      {localStorage.getItem('token') ? (
        <Todo />
      ) : (
        <>
          <Nav />
          <Notification>
            <ImWarning /> 로그인 후 이용해주세요
          </Notification>
        </>
      )}
    </MainContainer>
  );
}

export default Main;
