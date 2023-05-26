import React from "react";

// export function Statistics( ) (
//     <>
//       <h2>Statistic</h2>

//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total: {total}</p>
//       <p>Positive feedback: {positivePercentage}%</p>
//     </>
// )
const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </>
);

export { Statistics };