import React from "react";

export default function ResetButton({ onResetEventHandler }) {
    return (
        <div>
            <button onClick={onResetEventHandler}>Reset</button>
        </div>
    );
}