import React from "react";
import styled from "styled-components";
import { completeTodo, deleteTodo } from "../redux/actions/actions";
import { connect } from "react-redux";

const StyledDivContainer = styled.div`
  box-shadow: 0 2px 0 5px #5d8aa8;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-family: Roboto;
  align-items: center;
  width: 12rem;
  margin-bottom: 1rem;
  background-color: #89cff0;
  border-radius: 25px;
`;

const StyledDiv = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;
  color: ${({ $status }) => ($status ? "#138808" : "#5d8aa8")};
`;

const Styledbutton = styled.button`
  background: white;
  color: #bf4f74;
  font-size: 0.9rem;
  padding: 0.2rem 1em;
  border: 2px solid #bf4f74;
  border-radius: 25px;
  font-family: Roboto;
`;

const StyledInput = styled.input`
  outline: none;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  }
`;

const Styledh3 = styled.h3`
  border-bottom: 2px solid #1f305e;
  word-break: break-all;
  text-align: center;
`;

function Todo({ item, deletetodo, completetodo }) {
  const onDelete = (id) => {
    deletetodo(id);
  };

  const completeTodo = (id, isComplete) => {
    completetodo(id, isComplete);
  };

  return (
    <StyledDivContainer key={item.id}>
      <Styledh3>{item.Name}</Styledh3>
      <StyledDiv $status={item.isComplete ? true : false}>
        Status : {item.isComplete ? "Complete" : "Pending"}
      </StyledDiv>
      <StyledDiv>
        <Styledbutton
          onClick={() => {
            onDelete(item.id);
          }}
        >
          Delete
        </Styledbutton>
        <StyledInput
          type="checkbox"
          value={item.isComplete}
          onChange={() => {
            completeTodo(item.id, item.isComplete);
          }}
        />
      </StyledDiv>
    </StyledDivContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletetodo: (id) => dispatch(deleteTodo(id)),
    completetodo: (id, isComplete) => dispatch(completeTodo(id, isComplete)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
