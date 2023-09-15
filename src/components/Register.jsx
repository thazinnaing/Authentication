import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const USER_REGEX= /^[A-Za-z][A-Za-z0-9\-_\s]{3,}$/;
const PWD_REGEX= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const Register=()=>{
    const navigate=useNavigate()
    const userRef=useRef()
    const errRef=useRef()

    const [userName, setUserName]= useState("");
    const [validName, setValidName]=useState(false);

    const [password, setPassword]=useState("");
    const [validPassword, setValidPassword]=useState(false);

    const [confirmPassword, setConfirmPassword]=useState("");
    const [validConfirmPassword, setValidConfirmPassword]=useState(false);

    const [matchPassword, setMatchPassword]=useState(false)

    const [success, setSuccess]=useState(false);
    const [submit, setSubmit]=useState(false)

    const canSubmit=[userName, password, confirmPassword].every(Boolean);
    const handleSubmit=[validName, matchPassword].every(Boolean)

    console.log("userName", userName)
    console.log("password", password)
    console.log("confirmpassword", confirmPassword)
    console.log("match pass", matchPassword)
    console.log("cansubmit", canSubmit)
    console.log("handleSubmit",handleSubmit)
    console.log("success", success)
    console.log("submit", submit)

    useEffect(()=>{
        const result=USER_REGEX.test(userName);
        console.log("name result", result)
        setValidName(result)

    }, [userName])

    useEffect(()=>{
        const result=PWD_REGEX.test(password);
        console.log("password result", result);
        setValidPassword(result)

    }, [password])

    useEffect(()=>{
        const result=PWD_REGEX.test(confirmPassword);
        console.log("confirm result", result)
        setValidConfirmPassword(result)

        if(password.length > 0){
            setMatchPassword(password === confirmPassword)
        }

    }, [confirmPassword, password])


    const onClickHandler=(e)=>{
        e.preventDefault();
        setSubmit(x=> !x)
        setSuccess(handleSubmit)
    }
    
    return(
        <section className="register-container">
            <h2>Register Form</h2>
            {
               submit && success ? <p>Registration Successful!</p> : <p>Registration Unsuccessful!</p>
            }
            <form className="form-container" autoComplete="off">
                <label htmlFor="userName">UserName: </label>
                <input 
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}
                />
                {
                    userName && <p className={validName ? "non-block" : "invalid"}>! invalid username.<br/> You can enter 4 to 24 characters including small letter and capital letters.</p>
                }
                
                <label htmlFor="password">Password: </label>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                {
                    password && <p className={validPassword ? "non-block" : "invalid"}>! invalid password.<br/> You can enter from 8 characters including at least small letter, capital letter, number and special character like !@#$%.</p>
                }

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
                    disabled={!canSubmit}
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
