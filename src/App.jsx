import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Applications from "./pages/Applications/Applications";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
