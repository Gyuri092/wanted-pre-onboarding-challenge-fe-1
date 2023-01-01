import React, { useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const Label = styled.label`
  font-weight: bold;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  height: 30px;
  margin: 10px 10px;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: colunmn;
  justify-content: center;
`;

const MainLabel = styled.div`
  display: block;
  font-size: 30px;
`;

function Login() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const inputEmailRef = useRef<HTMLInputElement | null>(null);
  const inputPasswordRef = useRef<HTMLInputElement | null>(null);
  const formData = {
    email: inputEmailRef.current?.value.trim(),
    password: inputPasswordRef.current?.value.trim(),
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios
        .post('/users/login', JSON.stringify(formData))
        .then((res) => console.log(res.data));

      console.log(response);
      // formRef?.current?.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LoginContainer>
      <MainLabel>Login</MainLabel>
      <form onSubmit={handleSubmit} ref={formRef}>
        <Label>
          이메일
          <Input type="email" ref={inputEmailRef} required />
        </Label>
        <Label>
          비밀번호
          <Input type="password" ref={inputPasswordRef} required />
        </Label>
        <button type="submit">로그인 하기</button>
      </form>
    </LoginContainer>
  );
}

export default Login;
