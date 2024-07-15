import "./App.css";
import { Login } from "./components/views/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Waiterview } from "./components/views/Waiterview";
import { Chefview } from "./components/views/Chefview";
import { Ordersview } from "./components/views/Ordersview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/waiterview" element={<Waiterview />} />
        <Route path="/chefview" element={<Chefview />} />
        <Route path="/orderview" element={<Ordersview />} />
      </Routes>
    </Router>
  );
}

export default App;
