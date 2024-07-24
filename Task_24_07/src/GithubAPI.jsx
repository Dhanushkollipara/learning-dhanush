import { useEffect, useState } from "react";
import axios from "axios";
function GithubAPI(){
    let [data,setDataEntered] = useState("");
    let[dispData,setDispData] = useState("");

    function dataChanged(e){
        setDataEntered(e.target.value);
    }



    function getData(){
        axios
        .get(`https://api.github.com/users/${data}`)
        .then(function(response){
            setDispData(response.data);
        }).catch(function(error){
            console.log(error);
        })

        
    };

    return(
        <div className="GithubAPI">
            <input type="text" name="todoitem" value={data} onChange={dataChanged} placeholder="Enter Your GithubId"/>
            <button onClick={getData}>Get User Data</button>
            <div>
                <img src={dispData.avatar_url} alt="User Logo" />
                <p>{dispData.id}</p>
            </div>
        </div>

    )
}
export default GithubAPI; 




