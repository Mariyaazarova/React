import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import { DishCounter } from "../dish-counter/dish-counter";
import { ReviewForm } from "../review-form/review-form";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  return (
    <div>
      <div>
        <h2>{name}</h2>

        <h3>Меню:</h3>
        {!!menu.length && <Menu menu={menu} />}
        <DishCounter />
        <h3>Отзывы:</h3>
        {!!reviews.length && <Reviews reviews={reviews} />}

        <ReviewForm />
      </div>
      <div>
        <h2>{name}</h2>

        <h3>Меню:</h3>
        {!!menu.length && <Menu menu={menu} />}
        <DishCounter />
        <h3>Отзывы:</h3>
        {!!reviews.length && <Reviews reviews={reviews} />}

        <ReviewForm />
      </div>
    </div>
  );
};
