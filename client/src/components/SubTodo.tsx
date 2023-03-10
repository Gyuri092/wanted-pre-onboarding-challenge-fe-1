import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import API from '../utils/customAxios';
import { useNavigate } from 'react-router-dom';
import handleError from '../utils/handleError';

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

const UnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  margin-top: 15px;
  cursor: pointer;
  &: hover {
    font-weight: bold;
  }
  box-sizing: border-box;
  padding: 5px;
`;

const NewListItem = styled.li`
  width: 100%;
  height: 3%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 5px;
  border: 2px solid #b59ef5;
  cursor: pointer;
  &: hover {
    font-weight: bold;
  }
`;

function SubTodo() {
  const navigate = useNavigate();
  const [list, setList] = useState([{ title: '', content: '' }]);
  useEffect(() => {
    GetTodo();
  }, [list]);
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
      handleError(error);
    }
  };

  return (
    <SubTodoContainer>
      <SubTodoLabel>Todo List</SubTodoLabel>
      <UnorderedList>
        <NewListItem onClick={() => navigate('/todos')}>
          새 Todo 작성하기
        </NewListItem>
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
      </UnorderedList>
    </SubTodoContainer>
  );
}

export default SubTodo;
