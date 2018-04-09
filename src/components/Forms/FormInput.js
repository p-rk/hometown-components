import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import InputField from 'components/InputField';
import { Label, FeedBackMessage } from 'components/Label';

const FormInput = ({
  label, type, placeholder, onChange, value, feedBackMessage, feedBackError
}) => (
  <InputField>
    <Label>{label}</Label>
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    {feedBackError && <FeedBackMessage type="error">{feedBackMessage}</FeedBackMessage>}
  </InputField>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  feedBackMessage: PropTypes.string,
  feedBackError: PropTypes.bool
};

FormInput.defaultProps = {
  value: '',
  feedBackMessage: '',
  feedBackError: false
};

export default FormInput;
