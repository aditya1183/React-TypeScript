import React, { ComponentPropsWithoutRef } from "react";
type buttonprop = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;
type anchorprop = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
const Button = (props: buttonprop | anchorprop) => {
  if (props.el === "button") {
    return (
      <button className="button" {...props}>
        {props.value}
      </button>
    );
  }
  return <a className="button" {...props} href=""></a>;
};

export default Button;
