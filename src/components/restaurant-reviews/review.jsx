import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";

export const Review = ({ review }) => {
  const user = useSelector((state) => selectUserById(state, review.userId));

  const requestStatus = useRequest(getUsers);

  if (requestStatus === "pending") {
    return "loading...";
  }
  if (requestStatus === "rejected") {
    return "error...";
  }

  return (
    <li key={review.id}>
      <strong>{user?.name}:</strong> {review.text}
    </li>
  );
};
