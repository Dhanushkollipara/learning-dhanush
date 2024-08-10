import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Todoforms from "./Todoforms";
import Todolist from "./Todolist";


function Todo(){
    let params = useParams();
    //let list = [];
    let todosInitialValue = [{name:"Default",status:"default status"}];
    let [todos,setTodos] = useState(todosInitialValue);
    let [todoEntered,setTodoEntered] = useState("");
    let [statusEntered,setStatusEntered] = useState("");


    function getTodos(){
        axios
        .get("/todos")
        .then(function(response){
            console.log(response.data);
            setTodos(response.data);
        }).catch(function(error){
            console.log(error);
        })
    };
    

    useEffect(function(){
        console.log("Function Loaded");
        getTodos();
    },[]);
        
    function todoChanged(e){
        setTodoEntered(e.target.value);
    }

    function addTodo(){
        let newtodo = {name : todoEntered, status : statusEntered};
        console.log(newtodo);
        axios
        .post("/todos",newtodo)
        .then(function(response){
            console.log(response);
            if(response.data.status == 1)
                getTodos();
        })
    }

    function deleteTodo(indextoDelete){
        axios.delete(`/todos/${indextoDelete}`)
        .then(function(response){
            console.log("Data Deleted");
            getTodos();
        })
        .catch (function(err){
            console.log(err);
        });
    }

    function clearAll(){
        let newtodo = [];
        setTodos(newtodo);
    }


    return(
        <div>

        <Todoforms
        todoChanged={todoChanged}
        todoEntered={todoEntered}
        setStatusEntered={setStatusEntered}
        setTodoEntered={setTodoEntered}
        clearAll={clearAll} 
        addTodo={addTodo}/>

        <Todolist
        todos={todos} 
        deleteTodo={deleteTodo}/>

        </div>
        );
    }
export default Todo;