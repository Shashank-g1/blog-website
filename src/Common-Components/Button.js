import React from "react";
import PropTypes from "prop-types";

function Button({ type, text, className, onClick, styles }) {
  return (
    <button type={type} onClick={onClick} style={styles} className={className}>
      {text}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  styles: PropTypes.object,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "",
  onClick: () => {},
  styles: {},
};

export default Button;
