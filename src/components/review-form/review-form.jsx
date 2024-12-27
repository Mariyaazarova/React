import { Counter } from "../counter/counter";
import { useForm } from "../review-form/use-form";
import styles from "./review-form.module.css";
export const ReviewForm = () => {
  const {
    form,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clearForm,
  } = useForm();
  const { name, text, rating } = form;

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>Leave your review:</h3>
      <div>
        <span>Your name:</span>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <span>Review text:</span>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
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
      <button
        className={styles.reviewFormClear}
        type="button"
        onClick={clearForm}
      >
        Clear
      </button>
    </form>
  );
};
