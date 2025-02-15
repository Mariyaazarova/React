import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  text: "",
  rating: 5,
};

const SET_TEXT_ACTION = "SET_TEXT";
const INCREMENT_RATING_ACTION = "INCREMENT_RATING_ACTION";
const DECREMENT_RATING_ACTION = "DECREMENT_RATING_ACTION";
const RESET_ACTION = "DEFAULT_FROM_VALUE";

const reducer = (state, { type, payload }) => {
  const newRatingMin = state.rating < 5 ? state.rating + 1 : 5;
  const newRatingMax = state.rating > 0 ? state.rating - 1 : 0;
  switch (type) {
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case INCREMENT_RATING_ACTION:
      return { ...state, rating: newRatingMin };
    case DECREMENT_RATING_ACTION:
      return { ...state, rating: newRatingMax };
    case RESET_ACTION:
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
};

export const useForm = (initialValues = {}) => {
  const [form, dispatch] = useReducer(reducer, {
    ...DEFAULT_FORM_VALUE,
    ...initialValues,
  });

  const setText = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };
  const incrementRating = () => {
    dispatch({ type: INCREMENT_RATING_ACTION });
  };
  const decrementRating = () => {
    dispatch({ type: DECREMENT_RATING_ACTION });
  };
  const clearForm = () => {
    dispatch({ type: RESET_ACTION });
  };

  return {
    form,
    setText,
    incrementRating,
    decrementRating,
    clearForm,
  };
};
