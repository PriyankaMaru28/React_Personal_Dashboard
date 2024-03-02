import React from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import styled from "styled-components";
import { connect } from "react-redux";

const TodoWrapper = styled.div`
  background-color: #f0f8ff;
  box-shadow: 2px 8px 5px #003262;
  margin-top: 1rem;
  font-family: Roboto;
  overflow-y: auto;
`;

const TodoContainer = styled.div`
  display: flex;
  padding-right: 2em;
  padding-left: 2em;
  boder: 1px solid #2072af;
  background-color: #f0f8ff;
  justify-content: right;
`;
const TodoDiv = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1em;
  justify-content: center;
`;
const StyledH1 = styled.h1`
  color: #2072af;
  text-align: center;
  text-decoration: underline;
`;

function TodoList(props) {
  const { todoList } = props;

  return (
    <TodoWrapper>
      <StyledH1>My Tasks</StyledH1>
      <TodoContainer>
        <div>
          <AddTodo />
        </div>
      </TodoContainer>
      <TodoContainer>
        <TodoDiv>
          {todoList.map((ele) => {
            return <Todo item={ele} key={ele.id} />;
          })}
        </TodoDiv>
      </TodoContainer>
    </TodoWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
  };
};

export default connect(mapStateToProps, null)(TodoList);
