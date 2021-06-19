import { Link } from 'react-router-dom';
import useLogin from '../../hooks/use-login';
import LoginForm from '../Forms/LoginForm';
import Button from '../UI/Button';
import Header from '../UI/Header'
import "./Login.css";


const Login = () => {
    const firebaseLogin = useLogin();
    const signInHandler = (userData) => {
        firebaseLogin(userData.email, userData.password);
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