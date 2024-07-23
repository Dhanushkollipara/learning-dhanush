import { useState } from "react";
import { useParams } from "react-router-dom";
function Student(){
    let params = useParams();
    let data = function(name,age){
        this.name = name;
        this.age = age;
        this.displayName = function(){
            return this.name;
        }
        this.displayAge = function(){
            return this.age;
        }
    }

    let [nameEntered,setNameEntered] = useState("");
    let [ageEntered,setAgeEntered] = useState("");
    let [resultsAr,setResultsAr] = useState([]);
    function nameChanged(e){
        setNameEntered(e.target.value);
    }

    function ageChanged(e){
        setAgeEntered(e.target.value);
    }

    function addStudent(name,age){
        let studentOb = new data(name,age);
        console.log(studentOb);
        let newAr = [...resultsAr,studentOb];
        setResultsAr(newAr);
    }

    function deleteValue(indextoDelete){
        let newval = resultsAr.filter(function(val,i){
            if(indextoDelete == i) return false;
            return true;
        });
        setResultsAr(newval);
    }

    function clearAll(){
        setResultsAr([]);
    }

    return(
        <div className="Student">
            <h2>{params.title}</h2>
            <input type="text" name="todoitem" value={nameEntered} onChange={nameChanged} placeholder="Enter Student Name"/>
            <input type="text" name="todoitem" value={ageEntered} onChange={ageChanged} placeholder="Enter Student Age"/>
            <button className="addbtn" onClick={function(){
                addStudent(nameEntered,ageEntered);
            }}>Add Student </button>
            <button className="clearbtn" onClick={clearAll}>Clear All</button>

            <div>
            {resultsAr.map(function(val,i){
               return <div className="Disp">
                <h3>{val.displayName()} is having &nbsp; 
                {val.displayAge()} yrs.</h3>
                <button className="dltdata" onClick={function(){
                        deleteValue(i);
                    }}>Delete</button>
               </div>
            })}
            </div>
        </div>
    )
}

export default Student; 
