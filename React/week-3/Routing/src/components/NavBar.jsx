import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid gray" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link to="/contact" style={{ marginRight: "1rem" }}>Contact</Link>
      <Link to="/user/123">User 123</Link>
    </nav>
  );
}
