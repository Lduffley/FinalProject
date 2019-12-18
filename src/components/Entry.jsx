import React from "react";

function Entry(props) {
  return (
    <div>
      <div className="dictionary">
        <div className="term">
          <div>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.name}
            </span>
            <span>{props.price}</span>
          </div>
          <div>{props.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
