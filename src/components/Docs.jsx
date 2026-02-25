import { Link, Outlet } from "react-router-dom";
import Installation from "./Installation";
import Fondamentaux from "./Fondamentaux";
import Hooks from "./Hooks";


const Docs = () => {

  // const navigate = useNavigate()

  return (
    <div className="container">
      <h1>Getting Started</h1>
      {/* <button
        className="btn btn-primary"
        onClick={() => navigate("/tutorial", {replace: true})}
      >
        Vers Tutorials
      </button> */}


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li class="nav-item">
                  <Link className="nav-link" to="installation">Installation</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="fondamentaux">Fondamentaux</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="hooks">Hooks</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
    </div>
  )
}

export default Docs;
