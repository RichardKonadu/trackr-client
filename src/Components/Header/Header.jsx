import { Link } from "react-router";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__title">Trackr</h1>
      </Link>
      <div className="header__nav">
        <ul className="nav">
          <Link to="/login" className="nav__link">
            <li>Login/Register</li>
          </Link>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}
