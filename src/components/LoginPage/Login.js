import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import Button from '../UI/Button';
import Logo from '../../assets/Tesla-logo.svg';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import "./Login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="login__header">
                <div className="login__logo">
                    <Link to="/">
                        <img src={Logo} alt="Tesla Logo"></img>
                    </Link>
                </div>
                <div className="login__language">
                    <LanguageOutlinedIcon /> <span>en-US</span>
                </div>
            </div>
            <div className="login__info">
                <h1>Sign In</h1>
                <LoginForm />
                <div className="login__divider">
                    <span>OR</span>
                </div>
                <Link to="/">
                    <Button className="secondary">Create Account</Button>
                </Link>
            </div>
        </div>
    )
}

export default Login;