import QueryContextProvider from "../../context/features/QueryContextProvider";
import "./MainContainer.scss";

function MainContainer({ children }) {
  return (
    <QueryContextProvider>
      <div className="mainContainer">{children}</div>
    </QueryContextProvider>
  );
}

export default MainContainer;
