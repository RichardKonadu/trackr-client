import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Trackr</h1>
      <div className="header__nav">
        <ul className="nav">
          <li>Login/Register</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}
