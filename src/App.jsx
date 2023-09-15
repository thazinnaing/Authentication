
import Register from "./components/Register";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="login" element={<Login/>} />

    </Routes>
  )
}

export default App;