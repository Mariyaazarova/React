import { User } from "./restaurant-user";

export const Review = ({ review }) => {
  const { userId, text, rating } = review;

  return (
    <li>
      <User id={userId} />
      <strong>
        {text} - {rating}★
      </strong>
    </li>
  );
};
