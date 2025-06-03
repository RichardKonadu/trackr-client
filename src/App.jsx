import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Applications from "./pages/Applications/Applications";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
