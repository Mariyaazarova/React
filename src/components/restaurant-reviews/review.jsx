import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";
import { IS_PENDING } from "../consts";

export const Review = ({ review }) => {
  const user = useSelector((state) => selectUserById(state, review.userId));

  const requestStatus = useRequest(getUsers);

  const renderUser = () => {
    if (user) {
      return (
        <>
          <strong>{user?.name}:</strong> {review.text}
        </>
      );
    } else if (requestStatus === IS_PENDING) {
      return <div>Loading...</div>;
    } else {
      return <div>Ничего не найдено</div>;
    }
  };

  return <li key={review.id}>{renderUser()}</li>;
};
