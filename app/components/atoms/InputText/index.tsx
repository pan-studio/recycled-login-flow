import React from 'react';
import PropTypes from 'prop-types';

function InputText(props) {
  return (
    <input type="text" className={props.className} placeholder={props.placeholder}  {...props} />
  );
}

InputText.propTypes = {
  className: PropTypes.string,
};

export default InputText;