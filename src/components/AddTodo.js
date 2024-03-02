import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addNewTodo } from "../redux/actions/actions";

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0 0 0.5rem;
  font-size: 1rem;
  font-family: Roboto;
`;

const StyledDiv = styled.div`
  padding: 0.5rem;
`;

const Styledbutton = styled.button`
  background: white;
  color: #bf4f74;
  font-size: 1rem;
  font-family: Roboto;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 25px;
  padding: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.4em;
  font-size: 16px;
  box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  }
`;

function AddTodo(props) {
  const [task, gettaskName] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (props.todo) {
      const newTodo = {
        Name: task,
        id: props.todo.length + 1,
        isComplete: false,
      };

      props.addTodo(newTodo);
    }

    gettaskName("");
  };

  return (
    <StyledForm onSubmit={addTodo}>
      <StyledDiv>
        <StyledInput
          type="text"
          value={task}
          onChange={(e) => {
            gettaskName(e.target.value);
          }}
          placeholder={"Name of the Task"}
          required
        />
      </StyledDiv>
      <StyledDiv>
        <Styledbutton>Add Task</Styledbutton>
      </StyledDiv>
    </StyledForm>
  );
}

const mapStateToProps = (state) => {
  return {
    todo: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addNewTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
