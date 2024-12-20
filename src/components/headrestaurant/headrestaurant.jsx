import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import { Count } from "../count/count";

export const Headrestaurant = ({ headrestaurant }) => {
  const { name, menu, reviews } = headrestaurant;
  return (
    <div>
      <h2>{name}</h2>

      <h3>Меню:</h3>
      {Boolean(menu.length) && <Menu menu={menu} />}
      <Count />
      <h3>Отзывы:</h3>
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
    </div>
  );
};
