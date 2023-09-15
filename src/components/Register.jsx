import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const USER_REGEX= /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]){8,24}$/

const Register=()=>{
    const navigate=useNavigate()
    const userRef=useRef()
    const errRef=useRef()

    const [userName, setUserName]= useState("");
    const [validName, setValidName]=useState(false);

    const [password, setPassword]=useState("");
    const [validPassword, setValidPassword]=useState(false);

    const [confirmPassword, setConfirmPassword]=useState("");

    const [matchPassword, setMatchPassword]=useState(false)

    const onClickHandler=(e)=>{
        e.preventDefault()
    }
    
    return(
        <section className="register-container">
            <h2>Register Form</h2>
            <form className="form-container">
                <label htmlFor="userName">UserName: </label>
                <input 
                    type="text"
                    id="userName"
                    ref={userRef}
                    value={userName}
                    onChange={(e)=> setUser(e.target.value)}
                />

                <label htmlFor="password">Password: </label>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />

                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input 
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                />

                <div className="btn-container">
                <button className="register-btn"
                    type="submit"
                    onClick={onClickHandler}
                > Sign in
                </button>

                <button className="login-btn"
                    type="button"
                    onClick={()=>navigate("/login")}
                > Login
                </button>

                </div>
                
            </form>
    
        </section>
    )
}

export default Register;
