import { useRouteError, Link } from "react-router-dom";
import "./Error.scss";

function Error({ message }) {
  const error = useRouteError();

  return (
    <div className="error">
      <div className="error__content">
        <h4 className="error__message">{error.message}</h4>
        <Link to="/" className="error__redirect">
          <span>retry</span>
        </Link>
      </div>
      <img
        src="../src/pages/Error/error.svg"
        alt="Error image"
        className="error__image"
      />
    </div>
  );
}

export default Error;
