import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HiPlus } from 'react-icons/hi';
import { BiPencil } from 'react-icons/bi';
import { BiTrash } from 'react-icons/bi';
import API from '../utils/customAxios';
import { useParams, useNavigate } from 'react-router-dom';
import handleError from '../utils/handleError';
const MainTodoContainer = styled.div`
  width: 100%;
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
  box-sizing: border-box;
`;
const UpdateButton = styled.div`
  width: 50%;
  height: 100%;
  position: fixed;
  bottom: 7%;
  left: 18%;
  height: 4%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-sizing: border-box;
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
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  height: 4%;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 91.1%;
  border: none;
  font-size: 16px;
  padding: 10px;
  &:focus {
    outline: none;
  }
  resize: none;
  border: 2px solid #b59ef5;
  box-sizing: border-box;
`;

function MainTodo() {
  const id = useParams();
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [oldContent, setOldContent] = useState({ title: '', content: '' });
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
          alert('Todo??? ?????????????????????!');
          setInputDataValue({ title: '', content: '' });
        }
      });
    } catch (error) {
      handleError(error);
    }
  };

  const UpdateTodo = async () => {
    try {
      await API.put(`/todos/${id.id}`, formData, {
        headers: { Authorization: localStorage.getItem('token') },
      }).then((res: any) => {
        if (res.status === 200) {
          alert('Todo??? ?????????????????????!');
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
          setInputDataValue({ title: '', content: '' });
          alert('Todo??? ?????????????????????!');
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
  // todolist ?????? ??? url ?????? -> ??????????????? render
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
            setIsDisable(true);
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
      setIsDisable(false);
    }
  }, [id.id]);
  return (
    <MainTodoContainer>
      <ButtonContainer>
        {id.id ? null : (
          <Button onClick={AddTodo}>
            Todo ?????? <HiPlus />
          </Button>
        )}
        {id.id ? (
          <Button
            onClick={() => {
              setIsDisable(false);
              setIsUpdate(true);
              setOldContent(inputDatadValue);
            }}
          >
            Todo ??????
            <BiPencil />
          </Button>
        ) : null}
        <Button onClick={DeleteTodo}>
          Todo ?????? <BiTrash />
        </Button>
      </ButtonContainer>
      <ContentContainer>
        <Input
          type="text"
          name="title"
          value={inputDatadValue.title}
          onChange={onChange}
          placeholder="????????? ???????????????..."
          disabled={isDisable}
        />
        <Textarea
          name="content"
          id=""
          cols={30}
          value={inputDatadValue.content}
          onChange={onChange}
          placeholder="????????? ???????????????..."
          disabled={isDisable}
        ></Textarea>
      </ContentContainer>
      {isUpdate ? (
        <UpdateButton>
          <Button
            onClick={() => {
              navigate(`/todos/${id.id}`);
              setIsDisable(true);
              setInputDataValue({
                title: oldContent.title,
                content: oldContent.content,
              });
              setIsUpdate(false);
            }}
          >
            ????????????
          </Button>
          <Button onClick={UpdateTodo}>????????????</Button>
        </UpdateButton>
      ) : null}
    </MainTodoContainer>
  );
}

export default MainTodo;
