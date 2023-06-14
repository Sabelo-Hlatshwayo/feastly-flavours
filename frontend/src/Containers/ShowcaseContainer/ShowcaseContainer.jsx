import Recipe from "../../components/Recipe/Recipe";
import { useRecipes } from "../../context/features/RecipesContextProvider";
import "./ShowcaseContainer.scss";

function ShowcaseContainer() {
  // console.log(useRecipes());

  return (
    <div className="showcaseContainer">
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
    </div>
  );
}

export default ShowcaseContainer;
