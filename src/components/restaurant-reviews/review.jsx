import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";
import { REQUESR_STATUSES } from "../../redux/consts";

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
    } else if (requestStatus === REQUESR_STATUSES.PENDING) {
      return <div>Loading...</div>;
    } else {
      return <div>Ничего не найдено</div>;
    }
  };

  return <li key={review.id}>{renderUser()}</li>;
};
