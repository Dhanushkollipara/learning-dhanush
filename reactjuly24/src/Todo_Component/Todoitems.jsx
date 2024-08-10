import { Link } from "react-router-dom";

function Todoitems({val,i,deleteTodo}){
    return(
        <>
            <button className="dltbtn" onClick={function(){
                deleteTodo(i);
            }}>Delete</button>
            <Link to={`${i}`}>Edit Link</Link>
            <div>Task : {val.name} Status:{val.status} </div>
            
        </>
    )
}

export default Todoitems;