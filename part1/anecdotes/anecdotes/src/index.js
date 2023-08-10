import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const randomVal = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const handleVote = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  };
  const most = votes.indexOf(Math.max(...votes));

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <Button handleClick={randomVal} text={"next val"} />
      <div>has {votes[selected]} votes</div>
      <Button handleClick={handleVote} text={"vote"} />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[most]}</div>
      <div>{votes[most]}</div>
    </>
  );
};
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
