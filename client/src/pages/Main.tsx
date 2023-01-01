import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <div>메인화면입니다</div>
      <button onClick={() => navigate('/auth')}>회원 가입 / 로그인</button>
    </div>
  );
}

export default Main;
