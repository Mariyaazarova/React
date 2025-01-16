import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import { Layout } from "./components/layout/layout";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <RestaurantsPage />
      </Layout>
    </Provider>
  );
};
