import React from 'react'
import ErrorAlter from './ErrorAlert'


export default function LoginForm(props) {


    let {
        handleSubmit,
        setPassword,
        setEmail,
        errorMessage,
        setError
    } = props.loginState
   

    return (
        <div className="col-sm-7  bg-color align-self-center">
        <div className="form-section">
            <div className="title">
            <h3>Sign into your account</h3>
            </div>
            <div className="login-inner-form">
                <form method="POST" onSubmit={handleSubmit}>

                    <div className="form-group form-box">
                        <input type="text" id="email" className="input-text" placeholder="Email Address" onChange={e=> setEmail(e.target.value) } />
                        <i className="icon email"></i>
                    </div>

                    <div className="form-group form-box">
                        <input type="text" id="password" className="input-text" placeholder="Password" onChange={e=> setPassword(e.target.value) } />
                        <i className="icon lock"></i>
                    </div>

                    {
                        errorMessage && <ErrorAlter errorMessage={errorMessage} clearError={()=>setError(undefined)}></ErrorAlter>
                    }
                    <div className="form-group">
                        <button className="btn primary-btn">Login</button>
                    </div>

                </form>
            </div>
        </div>
        </div>
    )
}
