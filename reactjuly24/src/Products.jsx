import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Routes, useParams } from "react-router-dom";

function Products(props){
    let [categories,setCategories] = useState([]);
    let [filteredData,setFilteredData] = useState([]);
    let data = props.data;
    

    useEffect(function(){
        axios
        .get("https://fakestoreapi.com/products")
        .then(function(response){            
            let uniqueCat = ['All', ...new Set(response.data.map(function(val) { return val.category}))];
            setCategories(uniqueCat);
            console.log(`categories at line 30`);
        }).catch(function(error){
            console.log(error);
        })
    },[]); 




    function categoryFun(cat){
        let categoryData = data.filter(function(val){
            return val.category == cat
        })
        if (cat == 'All')
            setFilteredData(data);
        else
        setFilteredData(categoryData);
    }



    return(
        <div className="Products">
            <nav className="categories-btn">
            {categories.map(function(val,i){
                return <div>
                    <span><Link to={`/${val}`}> <button onClick={function (){categoryFun(val)}}> {val} </button>  </Link> </span>
                    </div>
            }
            )}
            </nav>
            {/* <button className="showProduct" onClick={getGender}>Show Products</button> */}
            <div className="outercontainer">
            { filteredData.map(function(val,i){
                return <div className="lst">
                    <div>
                    <img src={val.image} alt="product Img" width={"200px"} height={"200px"}/></div>
                    <h2>{val.title}</h2> 
                    <h3>₹ {val.price} </h3> 
                    <p>Description = {val.description}</p> 
                    <h4>----{">"} {val.category} {"<"}---- </h4>                
                    <h2>Rated {val.rating.rate} </h2> <br/>  
                    <Link to={`/${val.category}/${val.id}`}><button>Show Details</button></Link>
                </div>
            }) }
            </div>
        </div>
    )
}
export default Products;