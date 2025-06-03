import { Link, useNavigate } from "react-router";
import "./Login.scss";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <main className="login">
      <form className="form">
        <h2 className="form__title">Login</h2>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input className="form__input" type="text" name="email" id="email" />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            className="form__input"
            type="text"
            name="password"
            id="password"
          />
        </div>
        <button className="form__button">Login</button>
        <p className="form__signup">
          Need to create an account?
          <Link to="/register">
            <span className="form__signup--link"> {""}Sign up</span>
          </Link>
        </p>
      </form>
    </main>
  );
}
