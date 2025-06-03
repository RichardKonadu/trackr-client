import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios, { Axios } from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.name || !formData.password) {
      setErrorMessage("You must fill in all the form fields");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setErrorMessage("");
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  return (
    <main className="register">
      <div className="form__wrapper">
        <h2 className="form__title">Sign Up</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form__input"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="emailRegister" className="form__label">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="emailRegister"
              className="form__input"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="passwordRegister" className="form__label">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="passwordRegister"
              className="form__input"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="form__button">Signup</button>
          <p className="form__signup">
            Already Signed up?
            <Link to="/login">
              <span className="form__signup--link"> {""}Login</span>
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
