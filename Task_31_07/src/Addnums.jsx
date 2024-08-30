import { useState } from "react"
import { useParams } from "react-router-dom";

function Addnums(){
    let params = useParams();
    let res = 0;
    let [num1,setNum1] = useState("Num 1");
    let [num2,setNum2] = useState("Num 2");
    let [add,setAdd] = useState("Result");
    function num1Changed(e){
        setNum1(e.target.value);
    }

    function num2Changed(e){
        setNum2(e.target.value);
    }

    function Addvalues(){
        res = Number(num1)+Number(num2)
        setAdd(res);
    }

    return(
        <div className="Addnums">
            <h2>{params.title}</h2>
            <input type="number" onChange={num1Changed} placeholder="Enter 1st Number" />
            <input type="number" onChange={num2Changed} placeholder="Enter 2st Number" />
            <button onClick={Addvalues}>Add</button>
            <h1>The Addition of {num1} and {num2} is {add}</h1>
        </div>
    )
}
export default Addnums