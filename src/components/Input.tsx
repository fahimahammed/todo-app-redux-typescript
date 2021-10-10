import React from "react";
import { addItem } from "../redux/actions";
import { connect } from "react-redux";
import { TodoActionTypes } from "../redux/types";
const mapDispatchToProps = {
  addItem,
};
const Input = ({ addItem }: { addItem: (item: string) => TodoActionTypes }) => {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    if (e.key === "Enter") {
      if (e.target.value && e.target.value.trim().length > 0) {
        addItem(e.target.value);
      }
      e.target.value = "";
    }
  };
  return (
    <>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="todoText"
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Add an item and press Enter"
      />
    </>
  );
};

export default connect(null, mapDispatchToProps)(Input);
