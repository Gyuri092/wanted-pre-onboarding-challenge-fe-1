import React, { useRef, useState } from 'react';
import styled from 'styled-components';
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
  const [inputDatadValue, setInputDataValue] = useState({
    email: '',
    password: '',
  });
  const formData = {
    email: inputDatadValue.email,
    password: inputDatadValue.password,
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await API.post('/users/login', formData).then((res: any) => {
        if (res.status === 200) {
          console.log('정상적으로 요청되었습니다.');
          formRef?.current?.reset();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'email') {
      setInputDataValue((prev) => {
        return { ...prev, email: e.target.value };
      });
    } else {
      setInputDataValue((prev) => {
        return { ...prev, password: e.target.value };
      });
    }
  };
  return (
    <SignupContainer>
      <MainLabel>Login</MainLabel>
      <form onSubmit={handleSubmit} ref={formRef}>
        <Label>
          이메일
          <Input
            type="email"
            value={inputDatadValue.email}
            onChange={onChange}
            required
          />
        </Label>
        <Label>
          비밀번호
          <Input
            type="password"
            value={inputDatadValue.password}
            onChange={onChange}
            required
          />
        </Label>
        <button type="submit">로그인 하기</button>
      </form>
    </SignupContainer>
  );
}

export default Signup;
