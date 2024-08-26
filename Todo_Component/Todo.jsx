import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Todoforms from "./Todoforms";
import Todolist from "./Todolist";
import Container from '@mui/material/Container';

function Todo() {
    let [todos, setTodos] = useState([]);
    let [todoEntered, setTodoEntered] = useState("");
    let [statusEntered, setStatusEntered] = useState("");
    let [descEntered, setDescEntered] = useState("");

    function getTodos() {
        axios
            .get("/api/todos")
            .then(function (response) {
                setTodos(response.data);
            }).catch(function (error) {
                console.log(error);
            });
    };

    useEffect(function () {
        getTodos();
    }, []);

    function addTodo() {
        let newtodo = { name: todoEntered, status: statusEntered, description: descEntered };
        axios
            .post("/api/todos", newtodo)
            .then(function (response) {
                getTodos();
            });
    }

    function deleteTodo(indextoDelete) {
        axios.delete(`/api/todos/${indextoDelete}`)
            .then(function (response) {
                getTodos();
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function clearAll() {
        setTodos([]);
    }

    return (
        <Container>
            <Todoforms
                todoChanged={e => setTodoEntered(e.target.value)}
                descChanged={e => setDescEntered(e.target.value)}
                todoEntered={todoEntered}
                setStatusEntered={setStatusEntered}
                descEntered={descEntered}
                addTodo={addTodo}
                clearAll={clearAll}
            />
            <Todolist
                todos={todos}
                deleteTodo={deleteTodo}
            />
        </Container>
    );
}

export default Todo;
