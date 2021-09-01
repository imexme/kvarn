import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";   
// import NavHeader from '../components/UI/NavHeader'
// import '../components/UI/NavHeader.css';
import Logo from '../assets/Tesla-logo.svg';
// import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Menu from '../components/Menu/Menu'
import MenuItem from '../components/Menu/MenuItem'

  function Fresa ({ isMenuOpen, setIsMenuOpen }){
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
                        <Link to='/fresa'>Профильные фрезы </Link>
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
 
 

export default Fresa




// function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//         width,
//         height
//     };
// }

// export default function useWindowDimensions() {
//     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//     useEffect(() => {
//         function handleResize() {
//             setWindowDimensions(getWindowDimensions());
//         }

//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return windowDimensions;
// }

