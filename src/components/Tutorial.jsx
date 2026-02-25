import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";




const Tutorials = (props) => {
  console.log(props)

  const navigate = useNavigate()

  const initialState = {
    Docs:false,
    Tutorial: true,
    Community: false
  }

  const [underConst, setUnderConst] = useState(initialState)

  setTimeout(() => {
    navigate("/") // méthode qui fonctionne avec react-router-dom v6
  }, 5000);


  return (
      <div className="container mt-3">

      {
        underConst.Tutorial ? (
        <div className="alert alert-warning alert-dismissible fade show mt-3" role="alert">
          <strong>Oups</strong> Cette page n'existe pas.
          Redirection dans 5 secondes
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        ) : <h1>Tutorial: Intro to react</h1>
      }

        <button
          className="btn btn-primary"
          onClick={() => navigate(-1)}
        >
        Retour vers Docs
        </button>
         <button
          className="btn btn-secondary"
          onClick={() => navigate("/community")}
        >
        Aller vers Community
        </button>
      </div>
  )
}

export default Tutorials;
