import { useRef } from "react";

function RefHook(){
    const refOb = useRef(null);
    const buttonOb = useRef(null);
    const showName = () => {
        console.log(refOb.current)
        alert(refOb.current.value)
    }

    const attachEvent = () =>{
        buttonOb.current.addEventListener('click',clickFunc)
    }

    const clickFunc = ()=>{
        alert(refOb.current.value);
    }
    return (
        <div>
            <input type="text" name="name" ref={refOb} />
            <button onClick={attachEvent}>Attach event</button>
            <button ref={buttonOb}>Show Value</button>
        </div>
    )
}
export default RefHook;