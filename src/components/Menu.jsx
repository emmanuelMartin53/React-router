import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Navbar</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Docs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tutorial">Tutorial</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/community">Community</NavLink>
            </li>
          </ul>
        </div>
    </nav>


  )
}

export default Menu;
