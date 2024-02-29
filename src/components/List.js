import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as IcDelete } from "../icon/deleteIcon.svg";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../store/todoSlice";

const StWrapper = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const St = styled.div``;
const StAddContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
const StTodoInput = styled.input`
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid #a6a6a6;
  outline: none;
  &::placeholder {
    color: #a6a6a6;
  }
  cursor: pointer;
`;
const StAddBtn = styled.button`
  margin-left: 30px;
  border-radius: 8px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  color: #632cfa;
  border: 1px solid #a6a6a6;
  cursor: pointer;
  &:hover {
    background-color: #632cfa;
    color: white;
  }
`;
const StList = styled.ul`
  padding: 0;
  margin: 0;
  width: 300px;
`;
const StItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #a6a6a6;
  margin-bottom: 20px;
  border-radius: 8px;
  width: 100%;
  height: 30px;
  padding: 10px;
`;

const StIcon = styled(IcDelete)`
  cursor: pointer;
`;
export function List() {
  const [content, setContent] = useState("");
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setContent(e.target.value);
  };

  const handleClickAddButton = () => {
    dispatch(addTodo(content));
    setContent("");
  };

  const handleDeleteItem = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <StWrapper>
      <St>
        <StAddContainer>
          <StTodoInput
            placeholder="todo list를 입력하세요."
            onChange={handleChangeInput}
            value={content}
          />
          <StAddBtn onClick={handleClickAddButton}>추가</StAddBtn>
        </StAddContainer>

        <StList>
          {todoList.map((item, idx) => (
            <StItem key={idx}>
              {item}
              <StIcon onClick={() => handleDeleteItem(idx)}></StIcon>
            </StItem>
          ))}
        </StList>
      </St>
    </StWrapper>
  );
}
