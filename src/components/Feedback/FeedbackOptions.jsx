import React from "react";
import css from "./Feedback.module.css"

const FeedbackOptions = ({options, onLeaveFeedback}) => (
  <>
    <button className={css.feedback_btn} onClick={onLeaveFeedback.good} type="button">Good</button>
    <button className={css.feedback_btn} onClick={onLeaveFeedback.neutral} type="button">Neutral</button>
    <button className={css.feedback_btn} onClick={onLeaveFeedback.bad} type="button">Bad</button>
  </>
);

export { FeedbackOptions };