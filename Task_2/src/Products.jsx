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
            { data.map(function(val,i){
                return <div className="outercontainer">

                <div className="lst">
                    <img src={val.image} alt="product Img" width={"200px"} height={"200px"}/>
                    <p>Title = {val.title}</p> <br />
                    <p>Price = {val.price}</p> <br />
                    <p>Description = {val.description}</p> <br />
                    <p>Category = {val.category}</p>  <br />              
                    <p>Rating = {val.rating.rate}</p>  <br />  
                             
                </div>
                </div>
            }) }
        </div>
    )
}
export default Products;