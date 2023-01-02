import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
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

const LabelContainer = styled.div`
  width: 40%;
  height: 20%;
  text-align: center;
  font-size: 30px;
`;

function Auth() {
  const navigate = useNavigate();
  const [formName, setFormName] = useState('');
  return (
    <Container>
      <LabelContainer>
        <button
          onClick={() => {
            setFormName('signup');
          }}
        >
          회원가입
        </button>
        /
        <button
          onClick={() => {
            setFormName('login');
          }}
        >
          로그인
        </button>
      </LabelContainer>
      <LoginSignup formName={formName} />
      <button onClick={() => navigate('/')}>홈으로</button>
    </Container>
  );
}

export default Auth;
