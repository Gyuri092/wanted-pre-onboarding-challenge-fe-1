import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 5%;
  background-color: #d9d4ff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const Button = styled.div`
  width: 30%;
  height: 80%;
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
  box-sizing: border-box;
`;

function Nav() {
  const navigate = useNavigate();
  const isToken = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      alert('로그아웃 되었습니다.');
      navigate('/');
    } else {
      navigate('/auth');
    }
  };
  return (
    <NavContainer>
      <Button onClick={() => navigate('/auth')}>회원 가입</Button>
      <Button onClick={isToken}>
        {localStorage.getItem('token') ? '로그아웃' : '로그인'}
      </Button>
      <Button onClick={() => navigate('/')}>Home</Button>
    </NavContainer>
  );
}

export default Nav;
