import { HomePage } from "./components/home-page/home-page";
import { Layout } from "./components/layout/layout";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Tabs } from "./components/tabs/tabs";
import { Dishes } from "./components/restaurant-menu/dishes";
import { Restaurant } from "./components/restaurant/restaurant";
import { Reviews } from "./components/restaurant-reviews/reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/restaurants",
    element: (
      <Layout>
        <Tabs />
      </Layout>
    ),
    children: [
      {
        path: ":id",
        element: (
          <Layout>
            <Restaurant />
          </Layout>
        ),
        children: [
          {
            path: "menu",
            element: (
              <Layout>
                <menu />
              </Layout>
            ),
          },
          {
            path: "reviews",
            element: (
              <Layout>
                <Reviews />
              </Layout>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/dish/:dishId",
    element: (
      <Layout>
        <Dishes />
      </Layout>
    ),
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
