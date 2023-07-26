import { useState } from 'react'
import './login.css'

function Login(props) {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(props);
        if(mail === '') {
            alert('Mail cannot be empty')
            return
        }
        else if(password === '') {
            alert('Password cannot be empty')
            return
        }

        alert('Login succesful')
    }
  return (
    <div className='login'>
        <form action="">
            <input onChange={(e)=> setMail(e.target.value)} value={mail} type="text" placeholder="Example@gmail.com" />
            <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder="**********" />
            <input onClick={handleSubmit} type="button" value="Login"/>
        </form>
    </div>
  )
}

export default Login