import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import Browser from "./browser";

const Body = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
