import { HomePage } from "./components/home-page/home-page";
import { Layout } from "./components/layout/layout";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Tabs } from "./components/tabs/tabs";
import { Restaurant } from "./components/restaurant/restaurant";
import { RestaurantMenu } from "./components/restaurant-menu/restaurant-menu";
import { RestaurantReviews } from "./components/restaurant-reviews/restaurant-reviews";
import { Dishes } from "./components/restaurant-menu/dishes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/restaurants",
    element: <Tabs />,
  },
  {
    path: "/restaurants/:restaurantId",
    element: <Restaurant />,
    children: [
      {
        path: "menu",
        element: <RestaurantMenu />,
      },
      {
        path: "reviews",
        element: <RestaurantReviews />,
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
