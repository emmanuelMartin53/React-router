import { useParams, useLocation, useNavigate } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    return <Component {...props} router={{ params, location, navigate }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter;
