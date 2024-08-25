import { useState } from "react";
import { useParams } from "react-router-dom";

function Calculator(){
    let params = useParams();
    let [num,setNum] = useState("Enter Degree");
    let [res,setRes] = useState("Result");

    function numChanged(e){
        setNum(e.target.value);
    }

    function toSin(){
        res = Math.sin(num);
        setRes(Number(res.toFixed(3)));
    }
    function toCos(){
        res = Math.cos(num);
        setRes(Number(res.toFixed(3)));
    }
    function toTan(){
        res = Math.tan(num);
        setRes(Number(res.toFixed(3)));
    } 

    return(
        <div className="Calculator">
            <h2>{params.title}</h2>
            <input type="number" onChange={numChanged} placeholder="Enter Degrees" />
            <button onClick={toSin}>Sin</button>
            <button onClick={toCos}>Cos</button>
            <button onClick={toTan}>Tan</button> 
            <h1>{res}</h1>
        </div>

    )
}

export default Calculator;