
const initialState = {
    todos: [
        {name:"default Name1", status:"complete"},
        {name:"default Name2", status:"incomplete"}
    ],
};

function TodoReducer(state = initialState, action) {
    if (action.type === "ADD") {
        let newTodos = [...state.todos, action.todo];
        let newState = { ...state, todos: newTodos };
        return newState;
    }

    if (action.type === "DELETE") {
        let newTodos = state.todos.filter((_, index) => index !== action.index);
        let newState = { ...state, todos: newTodos };
        return newState;
    }

    if (action.type === "DELETE_ALL") {
        let newState = { ...state, todos: [] };
        return newState;
    }

    if (action.type === "UPDATE") {
        let newTodos = state.todos.map((todo, index) =>
            index === action.index ? action.updatedTodo : todo
        );
        let newState = { ...state, todos: newTodos };
        return newState;
    }

    return state;
}
export default TodoReducer;