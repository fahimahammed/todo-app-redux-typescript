import React from "react";
import "./App.css";
import Filter from "./components/Filter";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="w-full max-w-xs m-auto mt-20">
        <div className="mb-4">
          <form
            onSubmit={handleSubmit}
            className="bg-blue-200 shadow-md rounded px-5 pt-8 pb-5 mb-4"
          >
            <Input></Input>
            <Filter></Filter>
          </form>
        </div>
        <ToDoList></ToDoList>
      </div>
    </>
  );
}

export default App;
