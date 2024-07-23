import { useState } from "react";

function Counter(){
    let [stateCount,setStateCount] = useState(2);

    function Increaseval(){
        setStateCount(stateCount+1);
    }

    function Decreaseval(){
        setStateCount(stateCount-1);
    }

    function reset(){
        setStateCount(stateCount=0);
    }

    return(
        <div>
            <h1>{stateCount}</h1>
            <button onClick={Increaseval}>Increse</button>
            <button onClick={Decreaseval}>Decrese</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default Counter