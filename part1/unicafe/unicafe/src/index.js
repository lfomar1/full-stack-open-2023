import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Text = (props) => <h1>{props.text}</h1>;
const Button = ({ handleButton, text }) => {
  return <button onClick={handleButton}>{text}</button>;
};
const StatisticLine = ({ value, text }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + "%";
  if (good === 0 && neutral === 0 && bad === 0) return <p>No feedback given</p>;
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const increment = (state, setState) => () => setState(state + 1);
  return (
    <div>
      <Text text={"give feedback"} />
      <Button handleButton={increment(good, setGood)} text={"Good"} />
      <Button handleButton={increment(neutral, setNeutral)} text={"Neutral"} />
      <Button handleButton={increment(bad, setBad)} text={"Bad"} />
      <Text text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
