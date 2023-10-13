// import React from "react";
// import { ACTIONS } from "./App";


// const DigitButton = ({ digit, dispatch }) => {
//   return (
//     <div>
//       <button 
//         onClick={() =>
//           dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
//         }
//       >
//         {digit}
//       </button>
//     </div>
//   );
// };

// export default DigitButton;


import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}
