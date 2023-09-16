import React from 'react';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const userRef=useRef();
  const navigate=useNavigate();

  const [userName, setUserName]= useState("");
  const [password, setPassword]=useState("");

  useEffect(()=>{
    userRef.current.focus();
  },[])

  const onClickHandler=(e)=>{
    e.preventDefault();
  }

  return(
    <section className="login-container">
        <h2>Login Form</h2>
        <form className="form-container" autoComplete="off">
            <label htmlFor="userName">UserName: </label>
            <input 
                type="text"
                id="userName"
                ref={userRef}
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}
            />
            
            <label htmlFor="password">Password: </label>
            <input 
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />

            <div className="btn-container">
              <button className="login-btn"
                  type="submit"
                  onClick={onClickHandler}
              > Login
              </button>
              
              <button className="register-btn"
                  type="button"
                  onClick={()=>navigate("/")}
              > Sign in
              </button>

            </div>
            
        </form>

    </section>
  )
}

export default Login;
