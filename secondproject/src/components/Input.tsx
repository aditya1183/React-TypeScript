import React, { ComponentPropsWithoutRef } from "react";
type inputprops = {
  lable: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

// first way
// const Input = ({ lable, id }: inputprops) => {
//   return (
//     <p>
//       <label>{lable}</label>
//       <input id={id} type="text" />
//     </p>
//   );
// };

// second way
// const Input: React.FC<inputprops> = ({ lable, id }) => {
//   return (
//     <p>
//       <label>{lable}</label>
//       <input id={id} type="text" />
//     </p>
//   );
// };

/// third way to handle props in react + typescript
// const Input: React.FC<{ label: string; id: string }> = ({ label, id }) => {
//   return (
//     <p>
//       <label>{label}</label>
//       <input id={id} type="text" />
//     </p>
//   );
// };

const Input = ({ lable, id, ...props }: inputprops) => {
  return (
    <p>
      <label>{lable}</label>
      <input id={id} type="text" {...props} />
    </p>
  );
};
export default Input;
