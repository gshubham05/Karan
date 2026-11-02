import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-red-300 flex justify-between px-3 py-1">
      <Link to="/">Ravi</Link>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default Navbar;
