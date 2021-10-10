import React from "react";
import {
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLETE,
  setFilter,
} from "./../redux/actions";
import { connect } from "react-redux";
import { TodoActionTypes } from "../redux/types";
const mapDispatchToProps = {
  setFilter,
};
const Filter = ({
  setFilter,
}: {
  setFilter: (filter: string) => TodoActionTypes;
}) => {
  return (
    <>
      <div className="p-2">
        <button
          type="button"
          onClick={() => setFilter(FILTER_ALL)}
          className="bg-blue-500 px-2 active:bg-blue-700 text-white"
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter(FILTER_ACTIVE)}
          className="bg-blue-500 px-2 ml-2 active:bg-blue-700 text-white"
        >
          Active
        </button>
        <button
          type="button"
          onClick={() => setFilter(FILTER_COMPLETE)}
          className="bg-blue-500 px-2 ml-2 active:bg-blue-700 text-white"
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(Filter);
