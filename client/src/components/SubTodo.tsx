import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import API from '../utils/customAxios';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const SubTodoContainer = styled.div`
  width: 30%;
  height: 100%;
  border: 2px solid #b59ef5;
  box-sizing: border-box;
`;
const SubTodoLabel = styled.div`
  width: 100%;
  height: 4%;
  background-color: #eae0f6;
  color: #3a1a91;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  margin-top: 15px;
  cursor: pointer;
  &: hover {
    font-weight: bold;
  }
`;

type ServerError = { errorMessage: string };
function SubTodo() {
  const navigate = useNavigate();
  const [list, setList] = useState([{ title: '', content: '' }]);
  useEffect(() => {
    GetTodo();
  }, []);
  const GetTodo = async () => {
    try {
      await API.get('/todos', {
        headers: { Authorization: localStorage.getItem('token') },
      }).then((res: any) => {
        if (res.status === 200) {
          setList(res.data.data);
        }
      });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          const jsonString = JSON.stringify(serverError.response.data);
          const jsonObj = JSON.parse(jsonString);
          alert(jsonObj.details);
        }
      }
    }
  };

  return (
    <SubTodoContainer>
      <SubTodoLabel>Todo List</SubTodoLabel>
      <ul>
        {list.map((item: any, idx: number) => {
          return (
            <ListItem
              key={item.id + idx}
              onClick={() => navigate(`/todos/${item.id}`)}
              id={item.id}
            >
              {item.title}
            </ListItem>
          );
        })}
      </ul>
    </SubTodoContainer>
  );
}

export default SubTodo;
