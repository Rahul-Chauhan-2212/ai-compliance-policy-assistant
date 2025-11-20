import { Link } from "react-router-dom";
import ThemeToggle from "@/components/common/ThemeToggle";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <div style={{ marginLeft: "auto" }}>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
