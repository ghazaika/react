import { useState, useContext } from "react";
import  UserContext  from "../context/createContext";
const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return(<>{props.children}
    Name
    <input type = "text" value = {username}
    onChange = {(e) => setUsername(e.target.value)}/>
     Password
    <input type = "text" value = {password}
    onChange = {(e) => setPassword(e.target.value)}/>
    <button onClick= {handleSubmit}>Submit</button>
    </>)
}
export default Login