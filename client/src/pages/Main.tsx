import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Main() {
  return (
    <MainContainer>
      <Nav />
      <div>메인화면입니다</div>
    </MainContainer>
  );
}

export default Main;
