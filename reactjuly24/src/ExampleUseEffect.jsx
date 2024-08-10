const { useState, useEffect } = require("react");

const ExampleUseEffect = () =>{
    const [count,setCont] = useState(0);
    const [age,setAge] = useState(22);

    useEffect(()=>{
        console.log("i ran once")
        /* const destructor = ()=>{
            alert("Do u want to leave");
        };
        return destructor */
    },[])
    
    useEffect(()=>{
        console.log("Age Changed")
    },[age])

    useEffect(()=>{
        console.log("Age Changed")
        console.log(`Count from useEffect function ${count}`)
    },[count])

    const increaseCount = ()=>{
        setCont(count+1);
        console.log(`Count from increase function ${count}`)
    }

    const increaseAge = ()=>{
        setAge(age+1);
    }

    return(
        <div>
        <h1>useEffect</h1>
        <h3>{count}</h3>
        <h3>{age}</h3>
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={increaseAge}>Increase Age</button>
        </div>
    )
}

export default ExampleUseEffect;