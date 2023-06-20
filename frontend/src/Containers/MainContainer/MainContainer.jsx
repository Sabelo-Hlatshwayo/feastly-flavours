import RecipesContextProvider from "../../context/features/RecipesContextProvider";
import "./MainContainer.scss";

function MainContainer({ children }) {
  return <div className="mainContainer">{children}</div>;
}

export default MainContainer;
