"use client";

import { HomePage } from "./components/home-page/home-page";
import { Layout } from "./components/layout/layout";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import { DishPage } from "./components/dish-page/dish-page";
import { Restaurant } from "./components/restaurant/restaurant";
import { RestaurantMenu } from "./components/restaurant-menu/restaurant-menu";
import { RestaurantReviews } from "./components/restaurant-reviews/restaurant-reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":id",
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
        ],
      },
      {
        path: "/dish/:dishId",
        element: <DishPage />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
