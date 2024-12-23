import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import { Layout } from "./components/layout/layout";

export const App = () => {
  return (
    <Layout sidebar={<div>Sidebar</div>}>
      <RestaurantsPage />
    </Layout>
  );
};
