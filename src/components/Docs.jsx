
import { useNavigate } from "react-router-dom";


const Docs = () => {

  const navigate = useNavigate()

  return (
    <div className="container">
      <h1>Getting Started</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/tutorial", {replace: true})}
      >
        Vers Tutorials
      </button>
    </div>
  )
}

export default Docs;
