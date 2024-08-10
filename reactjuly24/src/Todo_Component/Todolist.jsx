import Todoitems from "./Todoitems";

function Todolist({todos,deleteTodo}){
    return(
        <>
            {
                todos.map(function(val,i){
                    return <Todoitems val={val} i={i} deleteTodo={deleteTodo}/>
                })
            }
        </>
    )
}

export default Todolist;