import './Header.css';
import Logo from './inHeader/Logo';
import Search from './inHeader/Search';
import Bar from './inHeader/Bar';

function Header() {
    return (
        <div className="Header">
            <Logo />
            <Bar />
            <Search />
        </div>
    );
}

export default Header;