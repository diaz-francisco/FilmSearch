import React from "react";

export default function ErrAlert({ err, submitedText, setErr }) {
  return (
    <div className="alert">
      <div>
        <strong className="error-text">
          {`Whoops!`}
          {err}
        </strong>
      </div>{" "}
      <button
        type="button"
        className="dismiss"
        aria-label="Close"
        onClick={() => setErr(null)}
      >
        x
      </button>
    </div>
  );
}
