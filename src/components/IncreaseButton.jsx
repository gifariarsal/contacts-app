import React from "react";

export default function IncreaseButton({ onIncreaseEventHandler }) {
    return (
        <div>
            <button onClick={onIncreaseEventHandler}>Increase</button>
        </div>
    );
}