import React from 'react';
import PropTypes from 'prop-types';
import RenderCounter from '../commons/RenderCounter';

const AppNameInputField = React.memo((props) => {
  return (
    <fieldset>
      <legend>AppNameInputField:</legend>
      <input defaultValue={props.defaultValue} onChange={props.onChange} />
      <RenderCounter />
    </fieldset>
  )
})

AppNameInputField.propTypes = {
  defaultValue: PropTypes.string,
}

export default AppNameInputField;
