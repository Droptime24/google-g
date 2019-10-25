import React from "react";

function Card({title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header bg-dark text-light">
        <h3>
          <strong>
            <i aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
