function Login() {

    let msg = "Login Component";
    
    function clicked(){
        alert("Now I can Login");
    }
    return(
        <div className="Login">
            <h1>{msg}</h1>
            <input type="text" name="username"/>
            <input type="password" name="Password"/>
            <button onClick={clicked}>Login Here</button>
        </div>
    )
}
export default Login;

