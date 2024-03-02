const initialState = {
  nextId: 9,
  todos: [
    {
      id: 1,
      name: "Clean closet",
      isComplete: false,
    },
    {
      id: 2,
      name: "Do Laundry",
      isComplete: false,
    },
    {
      id: 3,
      name: "Play Chesss",
      isComplete: false,
    },
    {
      id: 4,
      name: "Write a Song",
      isComplete: false,
    },
    {
      id: 5,
      name: "Complete Assignment",
      isComplete: false,
    },
    {
      id: 6,
      name: "Cook food",
      isComplete: false,
    },
    {
      id: 7,
      name: "Iron Clothes",
      isComplete: false,
    },
    {
      id: 8,
      name: "Study React",
      isComplete: false,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newList = [...state.todos, action.payload];
      return {
        ...state,
        todos: newList,
        nextId: Number(action.payload.id) + 1,
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
