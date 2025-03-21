import React, { FormEvent, useState } from "react";

type NewgoelProps = {
  onaddgoal: (goal: string, summary: string) => void;
};
const Newgoel: React.FC<NewgoelProps> = ({ onaddgoal }) => {
  const [goal, setgoel] = useState<string>("");
  const [summary, setsummary] = useState<string>("");

  function handlesubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onaddgoal(goal, summary);
    setgoel("");
    setsummary("");
  }
  return (
    <form onSubmit={handlesubmit}>
      <p>
        <label htmlFor="goel">Your goal</label>
        <input
          type="text"
          id="goel"
          value={goal}
          onChange={(e) => {
            setgoel(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="shortsummery">Short Summery</label>
        <input
          type="text"
          id="shortsummery"
          value={summary}
          onChange={(e) => {
            setsummary(e.target.value);
          }}
        />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
};

export default Newgoel;
