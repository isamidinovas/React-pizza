import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

//         С помощью классового компонента
// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className={classNames("button", {
//           "button--outline": this.props.outline,
//         })}
//       >
//         {this.props.children}
//       </button>
//     );
//   }
// }

function Button({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
}


Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
