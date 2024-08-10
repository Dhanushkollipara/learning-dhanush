import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from 'react-router-dom';
import { addAction, deleteTodo, deleteAllTodos } from "./actions/todoactions";
const ReduxTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => {
        console.log(state);
        return state.todos.todos;
    });
    const addTodo = (e) => {
        e.preventDefault();
        const todo = {name:e.target.name.value , status: e.target.status.value}
        dispatch(addAction(todo));
    };
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" name="name" />
                <select name="status">
                    <option value="complete">Completed</option>
                    <option value="incomplete">In Complete</option>
                </select>
                <button>Add Todo</button>
            </form>
            {todos.map((val,index) => {
                return(
                    <div>
                        <div> Name:{val.name}</div>
                        <div> Status:{val.status}</div>
                        <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
                        <Link to={`${index}`}>Edit</Link>
                    </div>
                );
            })}
            <Outlet/>
            <button onClick={() => dispatch(deleteAllTodos())}>Delete All</button>

        </div>
    )
}
export default ReduxTodo;