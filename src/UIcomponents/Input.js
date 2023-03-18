import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        style={{
          width: `${props.width}`,
          height: `${props.height}`,
          margin: `${props.margin}`,
          borderRadius: `${props.borderRadius}`,
        }}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </>
  );
};

export default Input;