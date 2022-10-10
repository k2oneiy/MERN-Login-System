import React from 'react'

export default function RegisterForm(props) {

    let {
        handleSubmit,
        setEmail,
        setPassword,
        setPasswordCheck,
        setUsername,
      } = props.registerState;
   
    return (
        <div className="col-sm-7 bg-color align-self-center">
            <div className="form-section">
                    <div className="title">
                        <h3>Create a new account</h3>
                    </div>
                    <div className="login-inner-form">
                        <form method="POST" onSubmit={handleSubmit}>

                        <div className="form-group form-box">
                            <input type="text" id="username" className="input-text" placeholder="Username" onChange={e=> setUsername(e.target.value) } />
                            <i className="icon user"></i>
                        </div>

                        <div className="form-group form-box">
                            <input type="text" id="email" className="input-text" placeholder="Email" onChange={e=> setEmail(e.target.value) } />
                            <i className="icon email"></i>
                        </div>

                        <div className="form-group form-box">
                            <input type="text" id="password" className="input-text" placeholder="Password" onChange={e=> setPassword(e.target.value) } />
                            <i className="icon lock"></i>
                        </div>

                        <div className="form-group form-box">
                            <input type="text" id="passwordCheck" className="input-text" placeholder="Verify Password" onChange={e=> setPasswordCheck(e.target.value) } />
                            <i className="icon lock"></i>
                        </div>

                        <div className="form-group">
                            <button className="btn primary-btn">
                                Register
                            </button>
                        </div>
                        </form>
                    </div>
            </div>            
        </div>
    )
}
