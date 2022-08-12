import { useState } from 'react';
import { useNavigate } from "react-router-dom";




const Register = (props) => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function submit() {
        fetch('http://localhost:1000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                email: username,
                password
            })
        }).then((res) => {

            console.log(res)
            navigate('/login')


        }).catch(err => {
            console.log(err)
            alert('try again')
        })
    }

    return (
        <div className='login-container'>
            <h1>Register</h1>

            <h3>username</h3>
            <input type="text" name='userName' onChange={(e) => {
                setUsername(e.target.value)
            }} />


            <h3>password</h3>
            <input type="text" name='password' onChange={(e) => {
                setPassword(e.target.value)
            }} />
        
            <button className='submit-btn' onClick={submit}>submit</button>

        </div>
    )
}

export default Register