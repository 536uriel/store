import { useState } from 'react';
import auth from './auth';
import { useNavigate } from "react-router-dom";




const Login = (props) => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function submit() {
        fetch('http://localhost:1000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                email: username,
                password
            })
        }).then(res => {
            console.log(res)
           return res.json()
        }).then((data) => {

            console.log(data)
            auth.login()
            navigate('/products')


        }).catch(err => {
            console.log(err)
            alert('try again')
        })
    }

    return (
        <div>
            <h1>login</h1>

            <h3>username</h3>
            <input type="text" name='userName' onChange={(e) => {
                setUsername(e.target.value)
            }} />


            <h3>password</h3>
            <input type="text" name='password' onChange={(e) => {
                setPassword(e.target.value)
            }} />

            <button onClick={submit}>submit</button>

        </div>
    )
}

export default Login