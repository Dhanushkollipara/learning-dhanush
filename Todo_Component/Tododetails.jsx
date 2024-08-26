import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";

function Tododetails(){
    const [todoData,setTodoData] = useState({});
    const {id} = useParams();
    useEffect(function(){
        axios.get(`/api/todos/${id}`).then(function (response){
            setTodoData(response.data);
        });
    },[]);

    return(
        <div>
            <div>Title: {todoData.title}</div>
            <div>Status: {todoData.status}</div>
            <div>Todo Id: {todoData.id}</div>
            <Link to="edit">Edit Todo</Link>
        </div>
    )
}
export default Tododetails;