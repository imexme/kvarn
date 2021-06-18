import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase/firebase.js';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import LoginForm from './LoginForm';
import Button from '../UI/Button';
import Header from './Header'
import "./Login.css";


const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const signInHandler = (userData) => {

        auth.signInWithEmailAndPassword(userData.email, userData.password).then((userAuth) => {

            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName
            }))
            history.push("/teslaaccount");
        }).catch(err => {
            alert(`Something went wrong! ${err.message}`)
        });

    }
    return (
        <div className="login">
            <Header />
            <div className="login__info">
                <h1>Sign In</h1>
                <LoginForm onSignIn={signInHandler} />
                <div className="login__divider">
                    <span>OR</span>
                </div>
                <Link to="/signup">
                    <Button className="secondary">Create Account</Button>
                </Link>
            </div>
        </div>
    )
}

export default Login;