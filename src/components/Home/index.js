import Header from './Header';
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';

const Home = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <>
            <Header notSticky={false} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Menu isMenuOpen={isMenuOpen} />
            <HeaderBlock />
        </>
    )
}

export default Home;