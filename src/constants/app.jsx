import { HeadrestaurantsPage } from "../components/headrestaurants-page/headrestaurants-page";
import { Layout } from "../components/layout/layout";

export const App = () => {
  return (
    <Layout sidebar={<div>Sidebar</div>}>
      <HeadrestaurantsPage />
    </Layout>
  );
};
