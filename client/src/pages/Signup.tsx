import React, { useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import API from '../utils/customAxios';
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

const SignupContainer = styled.div`
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

function Signup() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const inputEmailRef = useRef<HTMLInputElement | null>(null);
  const inputPasswordRef = useRef<HTMLInputElement | null>(null);
  const formData = {
    email: inputEmailRef?.current?.value,
    password: inputPasswordRef?.current?.value,
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('formData email: ', formData.email);
    console.log('formData password: ', formData.password);
    try {
      API.post('/users/create', formData).then((res: any) => {
        if (res.status === 200) {
          console.log('정상적으로 요청되었습니다.');
          formRef?.current?.reset();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignupContainer>
      <MainLabel>Signup</MainLabel>
      <form onSubmit={handleSubmit} ref={formRef}>
        <Label>
          이메일
          <Input type="email" ref={inputEmailRef} required />
        </Label>
        <Label>
          비밀번호
          <Input type="password" ref={inputPasswordRef} required />
        </Label>
        <button type="submit">회원가입 하기</button>
      </form>
    </SignupContainer>
  );
}

export default Signup;
