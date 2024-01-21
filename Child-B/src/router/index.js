import { Route, Routes } from "react-router-dom";
import Layout from "../layout";

export default function App() {
  return (
    <Routes>
      <Route exact path="/child-B" element={<Layout />} />
    </Routes>
  );
}
