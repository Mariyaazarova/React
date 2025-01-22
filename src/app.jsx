import { HomePage } from "./components/home-page/home-page";
import { Layout } from "./components/layout/layout";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Tabs } from "./components/tabs/tabs";
import { Dishes } from "./components/restaurant-menu/dishes";
import { Restaurant } from "./components/restaurant/restaurant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/restaurants",
    element: <Tabs />,
    children: [
      {
        path: ":id",
        element: <Restaurant />,
      },
    ],
  },
  {
    path: "/dish/:dishId",
    element: <Dishes />,
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  );
};
