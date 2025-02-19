import { useState } from "react";
import { ReviewForm } from "../review-form/review-form";
import { User } from "./restaurant-user";
import { useAuth } from "../auth-context/use-auth";
import styles from "./restaurant-reviews.module.css";

export const Review = ({ review, handleEditReview }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { auth } = useAuth();

  const { id, userId, text, rating } = review;

  const toggleEditMode = () => {
    if (auth.isAuthorized && auth.userId === userId) {
      setIsEditing(!isEditing);
    }
  };

  const handleSaveChanges = (updatedReview) => {
    if (auth.isAuthorized && auth.userId === userId) {
      handleEditReview(id, updatedReview);
      toggleEditMode();
    }
  };

  return (
    <li>
      <User id={userId} />
      {isEditing ? (
        <ReviewForm
          initialValues={{ text: text, rating: rating }}
          onSubmit={handleSaveChanges}
        />
      ) : (
        <>
          <strong>
            {text} - {rating}★
          </strong>

          {auth.isAuthorized && auth.userId === userId && (
            <button className={styles.buttonEdit} onClick={toggleEditMode}>
              Edit
            </button>
          )}
        </>
      )}
    </li>
  );
};
