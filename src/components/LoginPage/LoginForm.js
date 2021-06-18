import { useRef } from 'react';
import Button from '../UI/Button';
import './LoginForm.css';
const LoginForm = (props) => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        if (email.length === 0 || password.length === 0) {
            return;
        }
        props.onSignIn({ email, password });
        // emailRef.current.value = "";
        // passwordRef.current.value = "";
    }
    return (
        <form className='login__form' onSubmit={formSubmitHandler}>
            <label htmlFor='email'>Email Address</label>
            <input
                id='email'
                type='email'

                ref={emailRef}
            />
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                type='password'

                ref={passwordRef}
            />
            <Button name='Sign In' type='button' onClick="submit" className="primary" >SIGN IN</Button>
        </form>
    )
}
export default LoginForm