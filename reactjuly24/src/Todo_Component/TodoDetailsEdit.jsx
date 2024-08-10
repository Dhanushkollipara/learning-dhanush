import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TodoDetailsEdit() {
    const [todoData, setTodoData] = useState({});
    const options = [{ title: "completed" }, { title: "incomplete" }];
    const { id} = useParams();
    useEffect(function () {
    axios.get(`/todos/${id}`).then(function (response) {
    setTodoData (response.data);
    });
},[]);
    function editTodo(e) {
        e.preventDefault();
        let todoModified0b = {
            name: e.target.todoitem.value,
            status: e.target.status.value,
        };
        console.log(todoModified0b);
    }
    return (
        <>
        <form onSubmit={editTodo}>
            <input type="text"
            name="todoitem"
            value={todoData.name} onChange={function (e) {
            console.log(todoData);
            setTodoData({...todoData, name: todoData.name });
            }}
            />

            <select name="status">
            {options.map(function (val) {
            return (
                <option value={val.title} selected={val.title == todoData.status}>
                {val.title}
            </option>
            );
            })}
            </select>
            <button>Edit todo </button>
        </form>
    </>
    );
}
export default TodoDetailsEdit;