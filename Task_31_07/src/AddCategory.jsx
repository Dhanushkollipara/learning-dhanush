import { useState } from "react";
import axios from "axios";
function AddCategory(){

    let [name,setName] = useState("");
    let [desc,setdesc] = useState("");
    let [data,setData] =useState ([{name : "name", desc: "Description"}]);

    function nameChanged(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function descChanged(e){
        e.preventDefault();
        setdesc(e.target.value);
    }

    function AddCategory(){
        let newdata = {name : name, desc: desc};
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
            <input type="" value={name} onChange={nameChanged} placeholder="Enter Category Name"></input>
            <input type="" value={desc} onChange={descChanged} placeholder="Enter Description of the product"></input>
            <button onClick={AddCategory}>Submit</button> 

        </div>
    )
}

export default AddCategory;