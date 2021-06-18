import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Home/Header';
import './Account.css';
const Account = ({ isMenuOpen, setIsMenuOpen }) => {
    const displayName = useSelector(state => state.user.user.displayName);
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutApp = (e) => {
        e.preventDefault();
        dispatch(logout());
        history.push("./");
    }
    return (
        <div className="account">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="account__info">
                <div className="account__person">
                    <h4>{`${displayName}'s Tesla`}</h4>
                </div>
                <div className="account__infoRight">
                    <Link >Home</Link>
                    <Link >Charging</Link>
                    <Link >Settings</Link>
                    <Link onClick={logoutApp}>Sign out</Link>
                </div>
            </div>
            <div className="account__cards">

            </div>
        </div>
    )
}

export default Account
