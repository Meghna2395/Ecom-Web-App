import React from "react";

export const Boxed = (props) => {
  return (
    <div style={{ padding: "0px 10px", width: "250px" }}>{props.children}</div>
  );
};

export const H2 = (props) => {
  return (
    <div>
      <h2
        style={{
          borderBottom: "0.1px #E6E6E6 solid",
          textTransform: "uppercase",
          fontSize: "15px",
          fontWeight: "600",
          paddingBottom: "5px",
          marginBottom: "5px",
          marginTop: "0px",
        }}
      >
        {props.children}
      </h2>
    </div>
  );
};
