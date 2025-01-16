import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice";

export const Reviews = ({ reviews }) => {
  const users = useSelector((state) =>
    reviews.map((review) => selectUserById(state, review.userId))
  );

  return (
    <ul>
      {reviews.map((review, index) => {
        const user = users[index];
        return (
          <li key={review.id}>
            <strong>{user?.name}:</strong> {review.text}
          </li>
        );
      })}
    </ul>
  );
};
