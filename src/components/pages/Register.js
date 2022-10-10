import React,{useState} from 'react'
import BaseLogin from '../imports/BaseLogin';
import RegisterForm from '../imports/RegisterForm';
import { registerAction } from '../../container/action';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

export default function Register() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    const newUser = {
      username,
      email,
      password,
      passwordCheck
    }
    const user = { username: username,email: email,password: password,passwordCheck:passwordCheck}
    const validate = dispatch(registerAction(user));
    validate
      .then(data=>{
        navigate('/login');
      })
      .catch(error=>{
        console.log(error)
      })
    // console.log(newUser);
  }

  let registerData = {
    handleSubmit,
    setEmail,
    setPassword,
    setPasswordCheck,
    setUsername,
  }

  return (
    <div id='login'>
      <div className='container'>
        <div className='row login-box'>
            <BaseLogin/>
            <RegisterForm registerState = {registerData} />
        </div>
      </div>
    </div>
  )
}
