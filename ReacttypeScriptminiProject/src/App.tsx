import { useState } from "react";
import "./App.css";

import Header from "./Componnets/Header";
import reactsvg from "./assets/react.svg";
import CourseGoelList from "./Componnets/CourseGoelList";
import Newgoel from "./Componnets/Newgoel";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
function App() {
  const [goel, setgoel] = useState<CourseGoal[]>([]);

  function addgoelfunction(goal: string, summary: string) {
    setgoel((prevGoel) => {
      const newgoel: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoel, newgoel];
    });
  }

  function handledeletegole(id: number) {
    setgoel((prevgoel) => prevgoel.filter((goel) => goel.id !== id));
  }

  return (
    <main>
      <Header image={{ src: reactsvg, alt: "Aditya Vashistha" }}>
        <h1>Your Course Goel</h1>
      </Header>
      {/* <button onClick={addgoelfunction}>Add Goel</button> */}

      {/* <CourseGoel title="Learn React + TS">
        <p>Codprog.com</p>
      </CourseGoel> */}
      <Newgoel onaddgoal={addgoelfunction} />
      <CourseGoelList goel={goel} onDelete={handledeletegole} />
    </main>
  );
}

export default App;
