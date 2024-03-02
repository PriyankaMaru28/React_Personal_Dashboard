const initialState = {
  todos: [
    {
      id: 1,
      Name: "Clean closet",
      isComplete: false,
    },
    {
      id: 2,
      Name: "Do Laundry",
      isComplete: false,
    },
    {
      id: 3,
      Name: "Play Chesss",
      isComplete: false,
    },
    {
      id: 4,
      Name: "Write a Song",
      isComplete: false,
    },
    {
      id: 5,
      Name: "Complete Assignment",
      isComplete: false,
    },
    {
      id: 6,
      Name: "Cook food",
      isComplete: false,
    },
    {
      id: 7,
      Name: "Iron Clothes",
      isComplete: false,
    },
    {
      id: 8,
      Name: "Study React",
      isComplete: false,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newList = [...state.todos, action.payload];
      console.log("action,... ", newList);
      return {
        ...state,
        todos: newList,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };

    case "COMPLETE_TODO":
      const { id, isComplete } = action.payload;
      const completTodos = state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isComplete: !isComplete,
          };
        }
        return item;
      });
      return {
        ...state,
        todos: completTodos,
      };
    default:
      return state;
  }
};

export default rootReducer;
