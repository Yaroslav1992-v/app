import React, { useState } from "react";
const Counter = (props) => {
  const { value, onIncrement, onDecrement } = props;

  const formatValue = (count) => (count === 0 ? "empty" : count);
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };
  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue(value)}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onIncrement(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onDecrement(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2 "
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default Counter;
