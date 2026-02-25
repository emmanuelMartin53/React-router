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
    window.location.href = "/" // méthode qui fonctionne avec react-router-dom v6
  }, 5000);


  return (
      <div className="container mt-3">
        <h1>Tutorial: Intro to react</h1>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Oups</strong> this pages is under construction.
          You will be redirected to the Docs page in 5 seconds
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
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
