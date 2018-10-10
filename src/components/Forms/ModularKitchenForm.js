import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import Div from 'components/Div';
import Row from 'components/Row';
import FormInput from './FormInput';

const ModularKitchen = ({
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
  pincode,
  pincodeError,
  pincodeErrorMessage,
  onChangeName,
  onChangeAddress,
  onChangeEmail,
  onChangePhone,
  onChangePincode,
  onSubmitForm
}) => (
  <form onSubmit={onSubmitForm}>
    <Row m="0 1rem">
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
          label="Phone"
          type="text"
          placeholder=""
          onChange={onChangePhone}
          value={phone}
          feedBackError={phoneError}
          feedBackMessage={phoneErrorMessage}
        />
      </Div>
    </Row>
    <Row m="0 1rem">
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
    </Row>
    <Row m="0 1rem">
      <Div col="6" pr="0.625rem" pl="0.625rem">
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
      <Div col="6" pr="0.625rem" pl="0.625rem">
        <Button size="block" btnType="primary" fontFamily="regular" height="38px" mt="2rem">
          {' '}
                      Submit{' '}
        </Button>
      </Div>
    </Row>
  </form>
);

ModularKitchen.defaultProps = {
  name: '',
  email: '',
  phone: '',
  pincode: '',
  address: '',
  nameError: false,
  emailError: false,
  phoneError: false,
  pincodeError: false,
  addressError: false,
  nameErrorMessage: '',
  emailErrorMessage: '',
  phoneErrorMessage: '',
  addressErrorMessage: '',
  pincodeErrorMessage: '',
};

ModularKitchen.propTypes = {
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
  address: PropTypes.string,
  addressError: PropTypes.bool,
  addressErrorMessage: PropTypes.string,
  onChangeAddress: PropTypes.func.isRequired,
  pincode: PropTypes.string,
  pincodeError: PropTypes.bool,
  pincodeErrorMessage: PropTypes.string,
  onChangePincode: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default ModularKitchen;
