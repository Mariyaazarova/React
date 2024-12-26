import { Counter } from "../counter/counter";
import { useForm } from "../review-form/use-form";

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
      <h3>Комментарий:</h3>
      <div>
        <span>Ваше имя: </span>
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
        <span>Текст отзыва: </span>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <Counter
          value={rating}
          increment={incrementRating}
          decrement={decrementRating}
        />
      </div>
      <br />
      <button type="button" onClick={clearForm}>
        Clear
      </button>
    </form>
  );
};
