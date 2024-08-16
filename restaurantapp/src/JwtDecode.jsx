import { jwtDecode } from "jwt-decode";
import { useEffect , useState } from "react";
import axios from "axios";
import { getImageListItemBarUtilityClass } from "@mui/material";

const JwtDecode = () => {
    const [iat , setIat] = useState("");
    const [exp , setExp] = useState("");
    const [id , setId] = useState("");
    const [res , setRes] = useState(false);


    useEffect(() => {
        axios.post("http://localhost:1337/api/auth/local/", {
            username : "Dhanush",
            password : "Dhanush#08",
            identifier : "dhanush08@gmail.com",
        })
        .then((res) => {
            console.log(res.data);
            const decoded = jwtDecode(res.data.jwt);
            setExp(decoded.exp);
            setIat(decoded.iat);
            setId(decoded.id);
            setRes(res.data.user);
            console.log(decoded);
        });
    } , []);

    return (

        <div>
            Details of the User are : 
            <br/>
            Id = {res.id}
            <br/>
            Username = {res.username}
            <br/>
            email = {res.email}

            <br/>
            blocked : {(res.blocked) ? "blocked" : "Not Blocked" }
            <br/>
            Confirmed : {(res.confirmed) ? "Yes" : "No" }
            <br/>
            provider : {res.provider }
            <br/>
            Created At : {res.createdAt }
            <br/>
            Updated At : {res.updatedAt }
            <br/>

            
            <br/>

            Values from the Token are :
            <br/>
            Iat = {iat}
            <br/>
            exp = {exp}
            <br/>
            id = {id}

        </div>
    );
};
export default JwtDecode;