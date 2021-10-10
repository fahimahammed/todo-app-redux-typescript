import React, { useRef } from "react";
export const ToDoItem = ({
  id,
  text,
  complete,
  onToggleClick,
}: {
  id: number;
  text: string;
  complete: boolean;
  onToggleClick: (id: number) => void;
}) => {
  let radio = useRef<HTMLInputElement>(null);
  const handleToggleClick = (id: number) => {
    if (radio && radio.current) {
      radio.current.checked = false;
      onToggleClick(id);
    }
  };
  return (
    <>
      <div>
        <input
          ref={radio}
          type="radio"
          onClick={() => handleToggleClick(id)}
        ></input>
        <span
          className="ml-2"
          style={{ textDecoration: complete ? "line-through" : "none" }}
        >
          {text}
        </span>
      </div>
    </>
  );
};
