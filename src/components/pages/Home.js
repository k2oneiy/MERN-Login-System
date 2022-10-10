import React, { useEffect } from 'react'
import Header from '../imports/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  const user = useSelector(state => state.isLoggedIn);
  console.log(user);

    const route = () => {
      const token = localStorage.getItem('x-access-token')
      return token ? true : false
    }


  useEffect(()=>{
    if(!route()){
      navigate('/login')
    }
  },[route])
  return (
    <>
        <Header/>
        <main>
            <div className="container">
                <h4>Welcome to Home Page</h4>
            </div>
        </main>
    </>
  )
}
