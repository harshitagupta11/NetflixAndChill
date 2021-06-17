import React, { useRef, useState } from 'react';
import './SignUpScreen.css';
import {auth} from '../../config/firebase'
function SignUpScreen(props) {
    const emailRef=useRef(null);
    const passworfRef = useRef(null);
    const [error,setError]=useState('')
    const register =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passworfRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            console.log(error)
            setError(error)
        })
    }
    const signIn=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passworfRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch(error=>{
            setError(error)
            console.log(error)
        })
    }
    return (
        <div className="signUpScreen">
            <form>
                 <h1>Sign In</h1>
                 <input ref={emailRef} placeholder="Email" type="email" />
                 <input ref={passworfRef} placeholder="Password" type="password"/>
                 {error?
                 <p>Invalid email or password</p>:<></>
                 }
                 <button type="submit" onClick={(signIn)}> Sign In </button>
            </form>
            <h4>
                <span className="signUpScreen_gray">New to Netflix? </span>
                <span className="signUpScreen_link" onClick={register}>Sign up now.</span>
                </h4>
        </div>
    );
}

export default SignUpScreen;