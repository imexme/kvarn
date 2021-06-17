import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to='/' />
            </div>
        </div>
    )
}

export default Header;