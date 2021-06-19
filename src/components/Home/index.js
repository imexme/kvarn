import NavHeader from '../UI/NavHeader';
import Menu from '../Menu/Menu';
import HeaderBlock from './HeaderBlock';

const Home = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <>
            <NavHeader notSticky={false} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Menu isMenuOpen={isMenuOpen} />
            <HeaderBlock />
        </>
    )
}

export default Home;