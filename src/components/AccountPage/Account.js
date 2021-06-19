import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { Link, useHistory } from 'react-router-dom';
import NavHeader from '../UI/NavHeader';
import Car from './Car';
import './Account.css';
const Account = ({ isMenuOpen, setIsMenuOpen }) => {
    const displayName = useSelector(state => state.user.user.displayName);
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutApp = (e) => {
        e.preventDefault();
        dispatch(logout());
        history.push("/");
    }
    return (
        <div className="account">
            <NavHeader notSticky={true} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="account__info">
                <div className="account__person">
                    <h4>{`${displayName}'s Tesla`}</h4>
                </div>
                <div className="account__infoRight">
                    <Link to="#"  >Home</Link>
                    <Link to="#"  >Charging</Link>
                    <Link to="#"  >Settings</Link>
                    <Link to="#" onClick={logoutApp}>Sign out</Link>
                </div>
            </div>
            <div className="account__cars">
                <Car imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815' model="model s" testDrive={true} />
                <Car imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815' model="model x" testDrive={false} />
            </div>
        </div>
    )
}

export default Account
