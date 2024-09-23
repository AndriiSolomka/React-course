import React from "react";

const RenderNestedList = ({ data }) => {
  if (typeof data === "object" && data !== null) {
    return (
      <ul>
        {Object.entries(data).map(([key, value], index) => {
          if (key === "id") return null;

          return (
            <li key={index}>
              <strong>{key}:</strong>
              {Array.isArray(value) ? (
                <ul>
                  {value.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <RenderNestedList data={value} />
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return <span>{String(data)}</span>;
};

export default RenderNestedList;
