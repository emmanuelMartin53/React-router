import { Navigate, useNavigate } from "react-router-dom";


const Community = () => {
   const navigate = useNavigate()
  return (
    <div className="container">
      <h1>Where To Get Support</h1>
      <button
          className="btn btn-primary"
          onClick={() => navigate(-1)}
        >
        Retour vers Tutorial
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/")}
        >
        Retour vers Docs
        </button>



    </div>
  )
}

export default Community;
