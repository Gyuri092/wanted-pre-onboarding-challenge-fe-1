import React from 'react';
import styled from 'styled-components';
import { HiPlus } from 'react-icons/hi';
import { BiPencil } from 'react-icons/bi';
import { BiTrash } from 'react-icons/bi';
const MainTodoContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: white;
  border: 2px solid #b59ef5;
  box-sizing: border-box;
`;
const Button = styled.button`
  width: 33.33%;
  height: 100%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
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

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  border: 2px solid #b59ef5;
  box-sizing: border-box;
`;

function MainTodo() {
  return (
    <MainTodoContainer>
      <ButtonContainer>
        <Button>
          Todo 추가 <HiPlus />
        </Button>
        <Button>
          Todo 수정
          <BiPencil />
        </Button>
        <Button>
          Todo 삭제 <BiTrash />
        </Button>
      </ButtonContainer>
      <div>글 상세</div>
    </MainTodoContainer>
  );
}

export default MainTodo;
