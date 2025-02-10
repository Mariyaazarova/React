import { useAuth } from "../auth-context/use-auth";
import { Counter } from "../counter/counter";
import { useForm } from "../review-form/use-form";
import styles from "./review-form.module.css";

export const ReviewForm = ({ onSubmit, initialValues }) => {
  const { auth } = useAuth();
  const { form, setText, incrementRating, decrementRating, clearForm } =
    useForm(initialValues);

  const { text, rating } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text, rating, userId: auth.userId });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Your review:</h3>
        <div>
          <span>Review text:</span>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <br />
        <div className={styles.reviewFormRating}>
          <Counter
            value={rating}
            increment={incrementRating}
            decrement={decrementRating}
          />
        </div>
        <br />
        <button className={styles.reviewForm} type="button" onClick={clearForm}>
          Clear form
        </button>
        <button className={styles.reviewForm} type="submit">
          {initialValues ? "Save changes" : "Send review"}
        </button>
      </form>
    </div>
  );
};
