import RecipesContextProvider from "../../context/features/RecipesContextProvider";
import "./MainContainer.scss";

function MainContainer({ children }) {
  return (
    <RecipesContextProvider>
      <div className="mainContainer">{children}</div>
    </RecipesContextProvider>
  );
}

export default MainContainer;
