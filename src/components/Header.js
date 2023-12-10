import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginSwitch, setLoginSwitch] = useState("Login");
  const onlineStatus = useOnlineStatus();

  function handleLogger() {
    loginSwitch === "Login"
      ? setLoginSwitch("Logout")
      : setLoginSwitch("Login");
  }
  return (
    <div className="res-navbar">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={APP_LOGO} alt="app-logo" />
        </Link>
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li>Online Status : {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <button onClick={handleLogger}>{loginSwitch}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
