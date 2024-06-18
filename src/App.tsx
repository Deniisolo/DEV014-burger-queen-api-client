import "./App.css";
import { Login } from "./components/views/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Waiterview } from "./components/views/Waiterview";
import { Chefview } from "./components/views/Chefview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/waiterview" element={<Waiterview />} />
        <Route path="/chefview" element={<Chefview />} />
      </Routes>
    </Router>
  );
}

export default App;
