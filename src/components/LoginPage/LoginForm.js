import { useRef } from 'react';
import Button from '../UI/Button';
import './LoginForm.css';
const LoginForm = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value.trim();
        const password = password.current.value.trim();
        console.log(email, password);
    }
    return (
        <form className='login__form' onSubmit={formSubmitHandler}>
            <label htmlFor='email'>Email Address</label>
            <input
                id='email'
                type='email'
                value={emailRef.current.value}
                ref={emailRef}
            />
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                type='password'
                value={passwordRef.current.value}
                ref={passwordRef}
            />
            <Button name='Sign In' type='button' onClick="submit" className="primary" >SIGN IN</Button>
        </form>
    )
}
export default LoginForm