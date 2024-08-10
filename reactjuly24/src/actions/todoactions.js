export const addAction = (todo) => ({type:"ADD",todo:todo});
export const deleteTodo = (index) => ({ type: "DELETE", index });
export const deleteAllTodos = () => ({ type: "DELETE_ALL" });
export const updateTodo = (index, updatedTodo) => ({ type: "UPDATE", index, updatedTodo });
