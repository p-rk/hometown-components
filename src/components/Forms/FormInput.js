import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import InputField from 'components/InputField';
import TextArea from 'components/TextArea';
import { Label, FeedBackMessage } from 'components/Label';

const FormInput = ({
  label, type, placeholder, onChange, value, feedBackMessage, feedBackError, required, name, onBlur, rows
}) => (
  <InputField mb="0.625rem">
    <Label fontSize="0.875em" mb="0.625rem">{label}</Label>
    {(type === 'text' || type === 'password' || type === 'email' || type === 'number') && (
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        height="42px"
        name={name}
        required={required}
      />
    )}
    {type === 'textarea' && (
      <TextArea
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        required={required}
        rows={rows}
      />
    )}
    {feedBackError && <FeedBackMessage type="error">{feedBackMessage}</FeedBackMessage>}
  </InputField>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string,
  feedBackMessage: PropTypes.string,
  feedBackError: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  rows: PropTypes.number,
};

FormInput.defaultProps = {
  value: '',
  feedBackMessage: '',
  feedBackError: false,
  required: false,
  name: null,
  rows: 3,
  type: 'text'
};

export default FormInput;
