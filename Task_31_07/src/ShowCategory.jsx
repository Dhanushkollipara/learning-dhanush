import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import AddCategory from './AddCategory';

function ShowCategory() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    function displayCategory() {
        const url = "http://localhost:3000/api/v1/categories";
        axios.get(url)
            .then(function (response) {
                console.log(response.data.categories);
                setData(response.data.categories);
            })
            .catch(function (error) {
                alert("Server is not responding");
            });
    }


    

    return (
        <div className='outer'>
            <h1>Get Category Details</h1>
            <Link to="/admin/Category"><button onClick={displayCategory}>Show Category</button></Link><br/><br/>

            <div className='inner'>
                {data.map(function (value) {
                    return (
                        <div className='inside' key={value._id}>
                            <p><b>Name:</b> {value.name}</p>
                            <p><b>Price:</b> {value.price}</p>
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ShowCategory;