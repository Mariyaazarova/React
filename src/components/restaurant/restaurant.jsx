import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import { Counter } from "../counter/counter";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  return (
    <div>
      <h2>{name}</h2>

      <h3>Меню:</h3>
      {!!menu.length && <Menu menu={menu} />}
      <Counter />
      <h3>Отзывы:</h3>
      {!!reviews.length && <Reviews reviews={reviews} />}
    </div>
  );
};
