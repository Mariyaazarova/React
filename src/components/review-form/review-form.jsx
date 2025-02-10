import { Counter } from "../counter/counter";
import { useForm } from "../review-form/use-form";
import styles from "./review-form.module.css";

export const ReviewForm = ({ onSubmit }) => {
  const { form, setText, incrementRating, decrementRating, clearForm } =
    useForm();

  const { text, rating } = form;

  return (
    <div onSubmit={(e) => e.preventDefault()}>
      <form>
        <h3>Leave your review:</h3>

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
        <button
          className={styles.reviewForm}
          type="button"
          onClick={() =>
            onSubmit({
              text,
              rating,
              userId: "a304959a-76c0-4b34-954a-b38dbf310360",
            })
          }
        >
          Send review
        </button>
      </form>
    </div>
  );
};
