import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HiPlus } from 'react-icons/hi';
import { BiPencil } from 'react-icons/bi';
import { BiTrash } from 'react-icons/bi';
import API from '../utils/customAxios';
import { useParams } from 'react-router-dom';
import handleError from '../utils/handleError';
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

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 4%;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  font-size: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 89.5%;
  border: none;
  font-size: 16px;
  padding: 10px;
`;

function MainTodo() {
  const id = useParams();

  const [inputDatadValue, setInputDataValue] = useState({
    title: '',
    content: '',
  });
  const formData = {
    title: inputDatadValue.title,
    content: inputDatadValue.content,
  };

  const AddTodo = async () => {
    try {
      await API.post('/todos', formData, {
        headers: { Authorization: localStorage.getItem('token') },
      }).then((res: any) => {
        if (res.status === 200) {
          console.log('정상적으로 처리되었습니다.');
          setInputDataValue({ title: '', content: '' });
        }
      });
    } catch (error) {
      handleError(error);
    }
  };

  const ChangeTodo = async () => {
    try {
      await API.put(`/todos/${id.id}`, formData, {
        headers: { Authorization: localStorage.getItem('token') },
      }).then((res: any) => {
        if (res.status === 200) {
          console.log('정상적으로 처리되었습니다.');
          alert('Todo가 수정되었습니다!');
        }
      });
    } catch (error) {
      handleError(error);
    }
  };
  const DeleteTodo = async () => {
    try {
      await API.delete(`/todos/${id.id}`, {
        headers: { Authorization: localStorage.getItem('token') },
      }).then((res: any) => {
        if (res.status === 200) {
          console.log('정상적으로 처리되었습니다.');
          alert('Todo가 삭제되었습니다!');
        }
      });
    } catch (error) {
      handleError(error);
    }
  };
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.name === 'title') {
      setInputDataValue((prev) => {
        return { ...prev, title: e.target.value };
      });
    } else {
      setInputDataValue((prev) => {
        return { ...prev, content: e.target.value };
      });
    }
  };
  // todolist 선택 시 url 변경 -> 상세페이지 render
  useEffect(() => {
    const getTodoById = async () => {
      try {
        await API.get(`/todos/${id.id}`, {
          headers: { Authorization: localStorage.getItem('token') },
        }).then((res: any) => {
          if (res.status === 200) {
            setInputDataValue((prev) => {
              return {
                ...prev,
                title: res.data.data.title,
                content: res.data.data.content,
              };
            });
          }
        });
      } catch (error) {
        handleError(error);
      }
    };
    if (id.id) {
      getTodoById();
    } else {
      setInputDataValue({
        title: '',
        content: '',
      });
    }
  }, [id.id]);
  return (
    <MainTodoContainer>
      <ButtonContainer>
        <Button onClick={AddTodo}>
          Todo 추가 <HiPlus />
        </Button>
        <Button onClick={ChangeTodo}>
          Todo 수정
          <BiPencil />
        </Button>
        <Button onClick={DeleteTodo}>
          Todo 삭제 <BiTrash />
        </Button>
      </ButtonContainer>
      <ContentContainer>
        <Input
          type="text"
          name="title"
          value={inputDatadValue.title}
          onChange={onChange}
          placeholder="제목을 입력하세요..."
        />
        <Textarea
          name="content"
          id=""
          cols={30}
          value={inputDatadValue.content}
          onChange={onChange}
          placeholder="내용을 입력하세요..."
        ></Textarea>
      </ContentContainer>
    </MainTodoContainer>
  );
}

export default MainTodo;
