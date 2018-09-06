import React from 'react';
import PropTypes from 'prop-types';
// import { FeedBackMessage } from 'components/Label';
import Button from 'components/Buttons';
import FormInput from './FormInput';

const options = [
  { id: 1, option: 'Modular Kitchen' },
  { id: 2, option: 'Design & Build' },
  { id: 3, option: 'Modular Wardrobes' }
];

const ServiceSignUpForm = ({
  name,
  email,
  phone,
  address,
  location,
  pincode,
  service,
  onChangeName,
  onChangeAddress,
  onChangeEmail,
  onChangePhone,
  onChangeLocation,
  onChangePincode,
  onChangeService,
  onSubmitForm
}) => (
  <form onSubmit={onSubmitForm}>
    <FormInput
      label="Name"
      type="text"
      placeholder=""
      onChange={onChangeName}
      value={name}
      required
    />
    <FormInput
      label="Email"
      type="email"
      placeholder=""
      onChange={onChangeEmail}
      value={email}
      required
    />
    <FormInput
      label="Contact Number"
      type="text"
      placeholder=""
      onChange={onChangePhone}
      value={phone}
      required
    />
    <FormInput
      label="Address"
      type="textarea"
      placeholder=""
      onChange={onChangeAddress}
      value={address}
      required
    />
    <FormInput
      label="Location"
      type="text"
      placeholder=""
      onChange={onChangeLocation}
      value={location}
      required
    />
    <FormInput
      label="Pincode"
      type="text"
      placeholder=""
      onChange={onChangePincode}
      value={pincode}
      required
    />
    <select onChange={onChangeService} value={service} required>
      <option value="">Choose Service</option>
      {options.map(option => (
        <option key={option.id} value={option.id}>{option.option}</option>
      ))}
    </select>
    <Button
      size="block"
      btnType="primary"
      fontFamily="regular"
      height="42px"
      mt="1.25rem"
    > Submit </Button>
  </form>
);

ServiceSignUpForm.defaultProps = {
  name: '',
  email: '',
  phone: '',
  pincode: '',
  location: '',
  address: '',
  service: ''
};

ServiceSignUpForm.propTypes = {
  name: PropTypes.string,
  onChangeName: PropTypes.func.isRequired,
  email: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired,
  phone: PropTypes.string,
  onChangePhone: PropTypes.func.isRequired,
  location: PropTypes.string,
  onChangeLocation: PropTypes.string.isRequired,
  address: PropTypes.string,
  onChangeAddress: PropTypes.func.isRequired,
  pincode: PropTypes.string,
  onChangePincode: PropTypes.func.isRequired,
  service: PropTypes.string,
  onChangeService: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default ServiceSignUpForm;
