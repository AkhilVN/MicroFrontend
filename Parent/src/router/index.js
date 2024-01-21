import { Routes, Route } from "react-router-dom";
import LandingPage from "../app/index.js";

export default function App() {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage />} />
    </Routes>
  );
}
