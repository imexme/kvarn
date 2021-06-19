import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase/firebase.js';
import Header from '../UI/Header';
import SignupFrom from './SignupForm';
import Button from '../UI/Button';
import './Signup.css';

const Signup = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const signUpHandler = ({ firstName, lastName, email, password }) => {
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({ displayName: firstName }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: firstName
                }))
                history.push("/teslaaccount")
            }).catch(err => {
                alert(`Something went wrong! ${err.message}`)
            })
        });
    }
    return (
        <div className="signup">
            <Header />
            <div className="signup__info">
                <h1>Create Account</h1>
                <SignupFrom onSignUp={signUpHandler} />
                <div className="signup__divider">
                    <span>OR</span>
                </div>
                <Link to="/login">
                    <Button className="secondary">Sign In</Button>
                </Link>
            </div>
        </div>
    )
}

export default Signup
