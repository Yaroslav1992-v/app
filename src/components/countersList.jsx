import React, { useState } from "react";
import Counter from "./conter";
const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 3, value: 0, name: "Вилка" },
    { id: 4, value: 0, name: "Тарелка" },
    { id: 2, value: 0, name: "Набор Минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    const updatedCounters = [...counters];
    const index = updatedCounters.findIndex((num) => num.id === id);
    updatedCounters[index].value += 1;
    setCounters(updatedCounters);
  };
  const handleDecrement = (id) => {
    const updatedCounters = [...counters];
    const index = updatedCounters.findIndex((num) => num.id === id);
    if (updatedCounters[index].value > 0) {
      updatedCounters[index].value--;
    }

    setCounters(updatedCounters);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        ></Counter>
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
