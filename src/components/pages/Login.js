import React,{useState} from 'react'
import BaseLogin from '../imports/BaseLogin';
import LoginForm from '../imports/LoginForm';
import { useDispatch,useStore } from 'react-redux';
import { loginAction } from '../../container/action';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage,setError] = useState("")
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    const User = {
      email,
      password
    }
    // console.log(User);
    const userdata = {email:email,password:password}
    const login = dispatch(loginAction(userdata));
    login
      .then(data => navigate('/'))
      .catch(error => {
        setError(error.err)
        console.log(error.err)
      })

  }

  let loginData = {
    handleSubmit,
    setPassword,
    setEmail,
    errorMessage,
    setError
  }


  return (
    <div id='login'>
      <div className='container'>
        <div className='row login-box'>
            <BaseLogin/>
            <LoginForm loginState = {loginData} />
        </div>
      </div>
    </div>
  )
}


