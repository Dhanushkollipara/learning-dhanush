import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
        /* let newtodo = todos.filter(function(val,i){
            if(indextoDelete == i) return false;
            return true;
        }); */
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
        <div className="Hobby">
            <h2>{params.title}</h2>
            <input type="text" name="todoitem" value={todoEntered} onChange={todoChanged} placeholder="Enter Your Hobby"/>
            <select onChange={function(e){
                setStatusEntered(e.target.value);
            }}>
                <option value="Completed"> Completed</option>
                <option value="Not Completed"> Not Completed</option>
            </select>
            <button className="addbtn" onClick={addTodo}>Add Todo</button>
            <button className="clearbtn" onClick={clearAll}>Clear All</button>
            { todos.map(function(val,i){
                return <div className="lst">{val.name}
                    <button className="dltbtn" onClick={function(){
                        deleteTodo(i);
                    }}>Delete</button>
                    <div>{val.status}</div>
                    </div>
            }) }

        </div>
    );
}

export default Todo;