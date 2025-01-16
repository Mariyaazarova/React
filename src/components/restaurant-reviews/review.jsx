import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice";

export const Review = ({ review }) => {
  const user = useSelector((state) => selectUserById(state, review.userId));

  return (
    <li key={review.id}>
      <strong>{user?.name}:</strong> {review.text}
    </li>
  );
};
