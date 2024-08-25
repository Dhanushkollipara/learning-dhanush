import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
function AddCategory(){

    let [name,setName] = useState("");
    let [desc,setdesc] = useState("");
    let [data,setData] =useState ([{name : "", desc: ""}]);

    function nameChanged(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function descChanged(e){
        e.preventDefault();
        setdesc(e.target.value);
    }

    function AddCategory(){
        let newdata = {name : name, description: desc};
        axios
        .post("http://localhost:3000/api/v1/categories",newdata)
        .then(function(response){
            console.log(response)
            alert("Category added Successfully");
            setData(newdata);
        })
        .catch(function (err){
            console.log(err)
        })
    }


    return(
        <div className="addcategoryAddCategory">
            <br/>
            <input type="" value={name} onChange={nameChanged} placeholder="Enter Category Name"></input><br/><br/>
            <textarea type="" value={desc} onChange={descChanged} placeholder="Enter Description of the Category"></textarea><br/><br/>
            <button onClick={AddCategory}>Submit</button> 

        </div>
    )
}

export default AddCategory;