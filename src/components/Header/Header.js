import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header({ loggedIn, login }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Navigation loggedIn={loggedIn} login={login} />
      </div>
    </header>
  );
}

export default Header;
