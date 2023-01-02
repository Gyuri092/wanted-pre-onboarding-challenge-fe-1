import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid purple;
  border-radius: 10px;
`;
function Auth() {
  const navigate = useNavigate();
  return (
    <Container>
      <LoginSignup />
      <button onClick={() => navigate('/')}>홈으로</button>
    </Container>
  );
}

export default Auth;
