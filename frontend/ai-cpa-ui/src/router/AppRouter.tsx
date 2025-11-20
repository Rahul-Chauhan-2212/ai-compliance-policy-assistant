import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home/Home.tsx";
import About from "@/pages/about/About.tsx";
import Login from "@/pages/login/Login.tsx";


// <Route path="/" element={<Home />} />
// <Route path="/about" element={<About />} />
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Login />} />
  </Routes>
);

export default AppRouter;
