function Todoforms({todoChanged,todoEntered,setStatusEntered,addTodo,clearAll}){
    return(
        <div className="Hobby">
            <input type="text" name="todoitem" value={todoEntered} onChange={todoChanged} placeholder="Enter Your Hobby"/>

            <select onChange={function(e){
                setStatusEntered(e.target.value);
            }}>
                <option value="Completed"> Completed</option>
                <option value="Not Completed"> Not Completed</option>
            </select>
            <button className="addbtn" onClick={addTodo}>Add Todo</button>
            <button className="clearbtn" onClick={clearAll}>Clear All</button>
            
        </div>
    )
}
export default Todoforms;