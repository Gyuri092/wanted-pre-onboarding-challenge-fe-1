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
  border: 2px solid #d9d4ff;
  background-color: white;
  border-radius: 10px;
`;
const Button = styled.div`
  width: 100%;
  height: 10%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: #6445ff;
  cursor: pointer;
  &: hover {
    background-color: #eae0f6;
  }
  transition: all 0.3s ease-in-out;
`;
function Auth() {
  const navigate = useNavigate();
  return (
    <Container>
      <LoginSignup />
      <Button onClick={() => navigate('/')}>홈으로</Button>
    </Container>
  );
}

export default Auth;
