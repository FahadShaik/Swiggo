import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="res-navbar">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} alt="app-logo" />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li>About</li>
          <li>Offers</li>
          <li>Cart</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
