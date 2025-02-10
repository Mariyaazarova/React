import { useGetUsersQuery } from "../../redux/services/api/api";

export const User = ({ id }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: userId }) => userId === id),
    }),
  });

  if (!user?.name) {
    return null;
  }

  return <p>{user.name}:</p>;
};
