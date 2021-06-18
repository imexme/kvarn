import { useRef } from 'react';
import Button from '../UI/Button';
import './SignupForm.css';

const SignupForm = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const firstName = firstNameRef.current.value.trim();
        const lastName = lastNameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        if (email.length === 0 || password.length === 0 || firstName.length === 0 || lastName.length === 0) {
            return;
        }
        props.onSignUp({ firstName, lastName, email, password });

    }
    return (
        <form className='signup__form' onSubmit={formSubmitHandler}>
            <label htmlFor='firstName'>First Name</label>
            <input
                id='firstName'
                type='name'

                ref={firstNameRef}
            />
            <label htmlFor='lastName'>Last Name</label>
            <input
                id='lastName'
                type='name'

                ref={lastNameRef}
            />
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
            <Button name='Sign In' type='button' onClick="submit" className="primary" >Create Account</Button>
        </form>
    )
}
export default SignupForm