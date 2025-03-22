import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  return (
    <main>
      <Input lable="Your Name" id="name" type="text" placeholder="Enter name" />
      <Input lable="Your Age" id="age" type="number" />
      <Button el="button" value="aditya"></Button>
    </main>
  );
};

export default App;
