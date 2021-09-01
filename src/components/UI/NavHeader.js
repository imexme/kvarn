import logo from '../../assets/Tesla-logo.svg';
import './NavHeader.css';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Fresa from '../../pages/Fresa'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Menu from '../Menu/Menu'


function Header({ isMenuOpen, setIsMenuOpen }) {
    return (

        <div className='header'>
            <div className='header__logo'>
                <Link to='/'>
                    <img
                        className='header__logoImg'
                        // src={logo}
                        alt='HOME'
                    />
                </Link>
            </div>
            <Router>  
             <Switch>
                <div className='header__links'>
                    <Link to='/fresa'> Профильные фрезы </Link>
                    <Link to='/hydro'>Гидроголовы</Link>
                    <Link to='/castor'>Castor</Link>

                </div>
                </Switch>

            </Router>
            <div className='header__right'>

                <Link to='/login' className={isMenuOpen && 'header__link--hidden'}>
                    Whatsup
                </Link>
                <div
                    className='header__menu'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
        </div>
      
    )
}

export default Header