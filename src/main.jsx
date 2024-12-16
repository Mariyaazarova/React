import { createRoot } from "react-dom/client";
import { creatElement } from "react";
import { restaurants } from "../materials/mock";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  <div className="restaurants-list">
    <div className="restaurant-dishoom">
      <h1>"{restaurants[0].name}"</h1>
      <h3>Меню:</h3>
      <ul>
        <li>"{restaurants[0].menu[0].name}"</li>
        <li>"{restaurants[0].menu[1].name}"</li>
        <li>"{restaurants[0].menu[2].name}"</li>
      </ul>
      <h3>Отзывы:</h3>
      <ul>
        <li>
          {restaurants[0].reviews[0].user}: {restaurants[0].reviews[0].text}
        </li>
        <li>
          {restaurants[0].reviews[1].user}: {restaurants[0].reviews[1].text}
        </li>
      </ul>
    </div>
    <div className="restaurant-homeslice">
      <h1>"{restaurants[1].name}"</h1>
      <h3>Меню:</h3>
      <ul>
        <li>"{restaurants[1].menu[0].name}"</li>
        <li>"{restaurants[1].menu[1].name}"</li>
      </ul>
      <h3>Отзывы:</h3>
      <ul>
        <li>
          {restaurants[1].reviews[0].user}: {restaurants[1].reviews[0].text}
        </li>
        <li>
          {restaurants[1].reviews[1].user}: {restaurants[1].reviews[1].text}
        </li>
        <li>
          {restaurants[1].reviews[2].user}: {restaurants[1].reviews[2].text}
        </li>
      </ul>
    </div>
    <div className="restaurant-fabrique">
      <h1>"{restaurants[2].name}"</h1>
      <h3>Меню:</h3>
      <ul>
        <li>"{restaurants[2].menu[0].name}"</li>
        <li>"{restaurants[2].menu[1].name}"</li>
        <li>"{restaurants[2].menu[2].name}"</li>
      </ul>
      <h3>Отзывы:</h3>
      <ul>
        <li>
          {restaurants[2].reviews[0].user}: {restaurants[2].reviews[0].text}
        </li>
      </ul>
    </div>
    <div className="restaurant-flat-iron">
      <h1>"{restaurants[3].name}"</h1>
      <h3>Меню:</h3>
      <ul>
        <li>"{restaurants[3].menu[0].name}"</li>
        <li>"{restaurants[3].menu[1].name}"</li>
      </ul>
      <h3>Отзывы:</h3>
      <ul>
        <li>
          {restaurants[3].reviews[0].user}: {restaurants[3].reviews[0].text}
        </li>
        <li>
          {restaurants[3].reviews[1].user}: {restaurants[3].reviews[1].text}
        </li>
      </ul>
    </div>
  </div>
);

/* reactRoot.render(
  <div className="restaurants-list">
    {restaurants.map((restaurant) => (
      <div className="restaurant">
        <h1>{restaurant.name}</h1>
        <h3>Меню:</h3>
        <ul>
          {restaurant.menu.map((menu) => (
            <li>{menu.name}</li>
          ))}
        </ul>
        <h3>Отзывы:</h3>
        <ul>
          {restaurant.reviews.map((review) => (
            <li>
              {review.user}: {review.text}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
); */
