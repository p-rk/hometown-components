import React from 'react';
import PropTypes from 'prop-types';
// import { FeedBackMessage } from 'components/Label';
import Button from 'components/Buttons';
import Select from 'components/Select';
import InputField from 'components/InputField';
import Div from 'components/Div';
import Row from 'components/Row';
import Heading from 'components/Heading';
import { Label } from 'components/Label';
import FormInput from './FormInput';

const options = [
  { id: 1, option: 'Modular Kitchen' },
  { id: 2, option: 'Design & Build' },
  { id: 3, option: 'Modular Wardrobes' },
  { id: 4, option: 'Electronics' },
  { id: 5, option: 'Appliances' }
];

const ServiceSignUpForm = ({
  name,
  nameError,
  nameErrorMessage,
  email,
  emailError,
  emailErrorMessage,
  phone,
  phoneError,
  phoneErrorMessage,
  address,
  addressError,
  addressErrorMessage,
  location,
  locationError,
  locationErrorMessage,
  pincode,
  pincodeError,
  pincodeErrorMessage,
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
    <Row m="0 -0.625rem">
      <Div col="12" pr="0.625rem" pl="0.625rem">
        <Heading mb="1rem" mt="0" color="textDark">Signup Now</Heading>
      </Div>
    </Row>
    <Row m="0 -0.625rem">
      <Div col="6" pr="0.625rem" pl="0.625rem">
        <FormInput
          label="Name"
          type="text"
          placeholder=""
          onChange={onChangeName}
          value={name}
          feedBackError={nameError}
          feedBackMessage={nameErrorMessage}
        />
      </Div>
      <Div col="6" pr="0.625rem" pl="0.625rem">
        <FormInput
          label="Email"
          type="email"
          placeholder=""
          onChange={onChangeEmail}
          value={email}
          feedBackError={emailError}
          feedBackMessage={emailErrorMessage}
        />
      </Div>
    </Row>
    <Row m="0 -0.625rem">
      <Div col="6" pr="0.625rem" pl="0.625rem">
        <FormInput
          label="Contact Number"
          type="text"
          placeholder=""
          onChange={onChangePhone}
          value={phone}
          feedBackError={phoneError}
          feedBackMessage={phoneErrorMessage}
        />
      </Div>
      <Div col="6" pr="0.625rem" pl="0.625rem">
        <FormInput
          label="Location"
          type="text"
          placeholder=""
          onChange={onChangeLocation}
          value={location}
          feedBackError={locationError}
          feedBackMessage={locationErrorMessage}
        />
      </Div>
    </Row>
    <Row m="0 -0.625rem">
      <Div col="12" pr="0.625rem" pl="0.625rem">
        <FormInput
          label="Address"
          type="textarea"
          placeholder=""
          onChange={onChangeAddress}
          value={address}
          feedBackError={addressError}
          feedBackMessage={addressErrorMessage}
        />
      </Div>
    </Row>
    <Row m="0 -0.625rem">
      <Div col="6" pr="0.625rem" pl="0.625rem">
        <FormInput
          label="Pincode"
          type="text"
          placeholder=""
          onChange={onChangePincode}
          value={pincode}
          feedBackError={pincodeError}
          feedBackMessage={pincodeErrorMessage}
        />
      </Div>
      <Div col="6" pr="0.625rem" pl="0.625rem">
        <InputField mb="0.625rem">
          <Label fontSize="0.875em" mb="0.625rem">Service</Label>
          <Select onChange={onChangeService} value={service} required >
            <option value="">Choose Service</option>
            {options.map(option => (
              <option key={option.id} value={option.id}>{option.option}</option>
            ))}
          </Select>
        </InputField>
      </Div>
    </Row>
    <Row m="0 -0.625rem">
      <Div col="6" pr="0.625rem" pl="0.625rem">
        <Button
          size="block"
          btnType="primary"
          fontFamily="regular"
          height="42px"
          mt="1.25rem"
        > Submit </Button>
      </Div>
    </Row>
  </form>
);

ServiceSignUpForm.defaultProps = {
  name: '',
  email: '',
  phone: '',
  pincode: '',
  location: '',
  address: '',
  service: '',
  nameError: false,
  emailError: false,
  phoneError: false,
  pincodeError: false,
  locationError: false,
  addressError: false,
  nameErrorMessage: '',
  emailErrorMessage: '',
  phoneErrorMessage: '',
  locationErrorMessage: '',
  addressErrorMessage: '',
  pincodeErrorMessage: '',
};

ServiceSignUpForm.propTypes = {
  name: PropTypes.string,
  nameError: PropTypes.bool,
  nameErrorMessage: PropTypes.string,
  onChangeName: PropTypes.func.isRequired,
  email: PropTypes.string,
  emailError: PropTypes.bool,
  emailErrorMessage: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired,
  phone: PropTypes.string,
  phoneError: PropTypes.bool,
  phoneErrorMessage: PropTypes.string,
  onChangePhone: PropTypes.func.isRequired,
  location: PropTypes.string,
  locationError: PropTypes.bool,
  locationErrorMessage: PropTypes.string,
  onChangeLocation: PropTypes.string.isRequired,
  address: PropTypes.string,
  addressError: PropTypes.bool,
  addressErrorMessage: PropTypes,
  onChangeAddress: PropTypes.func.isRequired,
  pincode: PropTypes.string,
  pincodeError: PropTypes.bool,
  pincodeErrorMessage: PropTypes.string,
  onChangePincode: PropTypes.func.isRequired,
  service: PropTypes.string,
  onChangeService: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default ServiceSignUpForm;
