import React from "react";

export default function CounterDisplay({ count }) {
  const output =
    count === 0 ? (
      <p>Count: {count}</p>
    ) : count % 3 === 0 && count % 5 === 0 ? (
      <p>FizzBuzz</p>
    ) : count % 3 === 0 ? (
      <p>Fizz</p>
    ) : count % 5 === 0 ? (
      <p>Buzz</p>
    ) : (
      <p>Count: {count}</p>
    );

  return <div>{output}</div>;
}
