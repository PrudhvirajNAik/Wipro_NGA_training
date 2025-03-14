import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">E-Commerce</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
