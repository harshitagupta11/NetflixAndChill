import React, { useState } from 'react';
import SignUpScreen from '../components/SignUpScreen/SignUpScreen';
import './Login.css'
function Login(props) {
    const [signIn,setSignIn] = useState(true)

    return (
        <div className="loginScreen">
           <div className="loginScreen_background">
               <img className="loginScreen_logo"
               src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
           <button onClick={()=>setSignIn(true)}
           className="loginScreen_button">
               Sign IN
           </button>
           <div className="loginScreen_gradient" />

           
           </div>
        <div className="loginScreen_body">
            {signIn?(
                <SignUpScreen />
            ):<>
            <h1>
            Unlimited movies, TV shows and more.
            </h1>
            <h2>
                Watch anywhere. Cancel at any time.
            </h2>
            <h3>
                Ready to watch? Enter your email to 
                create or restart your
                membership.
            </h3>
            <div className="loginScreen_input">
                <form >
                    <input type='email' placeholder="Email Address"/>
                    <button onClick={()=>setSignIn(true)}
                    className="loginScreen_getStarted">
                        GET STARTED
                    </button>
                </form>
            </div>
            </>
            }
            
        </div>
        </div>
        
    );
}

export default Login;