import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

const Router = () => {
  return <div>Router</div>;
};

export default Router;
