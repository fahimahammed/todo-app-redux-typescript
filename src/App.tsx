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
            className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4"
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
