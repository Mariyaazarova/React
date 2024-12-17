import { createRoot } from "react-dom/client";
import { creatElement } from "react";
import { restaurants } from "../materials/mock";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  <div>
    <div>
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
    <div>
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
    <div>
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
    <div>
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
