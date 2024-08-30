import { useEffect, useState } from "react";
import axios from "axios";

function Products(){
    // let initData = [];
    let [data,setData] = useState([]);


    function getGender(){
        axios
        .get("https://fakestoreapi.com/products")
        .then(function(response){
            setData(response.data);
            console.log(response.data);
        }).catch(function(error){
            console.log(error);
        })
    };


    /* useEffect(function(){
        console.log("Function Loaded");
        getGender();
    },[]); */


    return(
        <div className="Products">
            <button className="showProduct" onClick={getGender}>Show Products</button>
            <div className="outercontainer">
            { data.map(function(val,i){
                return <div className="lst">
                    <div>
                    <img src={val.image} alt="product Img" width={"200px"} height={"200px"}/></div>
                    <h2>{val.title}</h2> 
                    <h3>₹ {val.price} </h3> 
                    <p>Description = {val.description}</p> 
                    <h4>----{">"} {val.category} {"<"}---- </h4>                
                    <h2>Rated {val.rating.rate} </h2>   
                             
                </div>
            }) }
            </div>
        </div>
    )
}
export default Products;