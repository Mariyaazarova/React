export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>{review.text}</li>
      ))}
    </ul>
  );
};
