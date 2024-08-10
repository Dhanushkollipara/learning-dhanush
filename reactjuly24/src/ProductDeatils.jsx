import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props){
    let data = props.data;
    let {id} = useParams();
    let {category} = useParams();
    let [productDetails,setproductDetails] = useState([]);
    let count = 0;
    useEffect( function(){

        let productData = data.filter(function(val){return val.id == id});
        setproductDetails(productData);
        console.log(productDetails);
    },[data,id])

    function getCatCount(){
        data.map(function(val){
            if(val.category == category)
                count++;
        })
        return count;
    }

    return(
        <div className="Product-details">
            {
                productDetails.map(function(val){
                    return <div> 
                    <img src={val.image} alt="product Img" width={"200px"} height={"200px"}/>
                    <h2>{val.title}</h2> 
                    <h3>₹ {val.price} </h3> 
                    <p>Description <br/>{val.description}</p> 
                    <h4>----{">"} {val.category} {"<"}---- </h4>                
                    <h2>Rated {val.rating.rate} out of {getCatCount()} Products</h2> 
                    </div>
                })
            }
        </div>
    )
}

export default ProductDetails;