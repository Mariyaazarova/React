import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice";

export const Review = ({ review }) => {
  const user = useSelector((state) => selectUserById(state, review.userId));

  const renderUser = () => {
    if (user) {
      return (
        <>
          <strong>{user?.name}:</strong> {review.text}
        </>
      );
    } else {
      return <div>Пользователь не найден</div>;
    }
  };

  return <li key={review.id}>{renderUser()}</li>;
};
