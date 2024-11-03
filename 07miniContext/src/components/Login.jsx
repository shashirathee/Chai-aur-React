import React,{useState, useContext} from 'react'
import UserContextt from '../context/UserContextt'

export function Login(props) {
    

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const {setUser}= useContext(UserContextt)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <>
            <h2>Login</h2>
            <input type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
             placeholder='username' />
             {" "}
            <input type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
