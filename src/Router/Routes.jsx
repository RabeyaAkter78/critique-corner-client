import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Categories from "../Pages/Categories/Categories";
import Fashion from "../Components/Fashion/Fashion";
import Electronics from "../Components/Electronics/Electronics";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MakeReview from "../Components/MakeReview/MakeReview";
import PrivateRoute from "./PeivateRoute";
import AllReview from "../Components/AllReview/AllReview";
import Replay from "../Components/Replay/Replay";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "categories",
        element: <Categories></Categories>
      },
      {
        path: "reviews",
        element: <AllReview></AllReview>
      },
      {
        path: "fashion",
        element: <Fashion></Fashion>
      },
      {
        path: "electronics",
        element: <Electronics></Electronics>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "makeReview",
        element:<PrivateRoute><MakeReview></MakeReview></PrivateRoute>,
      },
      {
        path: "replay",
        element: <Replay></Replay>
      },
    ]
  },
]);


