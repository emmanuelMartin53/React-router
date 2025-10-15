import { Navigate } from "react-router-dom";


const Tutorial = (props) => {
  console.log(props)

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
    </div>
  )
}

export default Tutorial;
