import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import Div from 'components/Div';
import Row from 'components/Row';
import { /* FeedBackMessage, */ Label } from 'components/Label';
import FormInput from './FormInput';

export default class ServiceRequestForm extends Component {
  render() {
    const {
      handleChange,
      handleCheckBoxChange,
      onSubmitForm,
      firstName,
      firstNameFeedBackError,
      firstNameFeedBackMessage,
      lastName,
      lastNameFeedBackError,
      lastNameFeedBackMessage,
      phone,
      phoneFeedBackError,
      phoneFeedBackMessage,
      email,
      emailFeedBackError,
      emailFeedBackMessage,
      order,
      orderFeedBackError,
      orderFeedBackMessage,
      storeName,
      storeNameFeedBackError,
      storeNameFeedBackMessage,
      city,
      cityFeedBackError,
      cityFeedBackMessage,
      review,
      reviewFeedBackError,
      reviewFeedBackMessage,
      /* eslint-disable camelcase */
      under_warranty,
      out_of_warranty,
      assembly_dismatling,
      /* eslint-enable camelcase */
      loading,
      loaded
    } = this.props;
    return (
      <form onSubmit={onSubmitForm}>
        <Row ml="0" mr="0">
          <Div col="4" pr="0.625rem" pl="0.625rem">
            <FormInput
              label="First Name*"
              type="text"
              placeholder=""
              name="firstName"
              onChange={handleChange}
              value={firstName}
              feedBackError={firstNameFeedBackError}
              feedBackMessage={firstNameFeedBackMessage}
            />
          </Div>
          <Div col="4" pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Last Name*"
              type="text"
              placeholder=""
              onChange={handleChange}
              name="lastName"
              value={lastName}
              feedBackError={lastNameFeedBackError}
              feedBackMessage={lastNameFeedBackMessage}
            />
          </Div>
          <Div col="4" pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Registered Mobile No*"
              type="text"
              maxlength="10"
              placeholder=""
              onChange={handleChange}
              name="phone"
              value={phone}
              feedBackError={phoneFeedBackError}
              feedBackMessage={phoneFeedBackMessage}
            />
          </Div>
        </Row>
        <Row ml="0" mr="0">
          <Div col="4" pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Email Address*"
              type="text"
              placeholder=""
              onChange={handleChange}
              name="email"
              value={email}
              feedBackError={emailFeedBackError}
              feedBackMessage={emailFeedBackMessage}
            />
          </Div>
          <Div col="4" pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Order Number*"
              type="text"
              placeholder=""
              onChange={handleChange}
              name="order"
              value={order}
              feedBackError={orderFeedBackError}
              feedBackMessage={orderFeedBackMessage}
            />
          </Div>
          <Div col="4" pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Store*"
              type="text"
              placeholder=""
              onChange={handleChange}
              name="storeName"
              value={storeName}
              feedBackError={storeNameFeedBackError}
              feedBackMessage={storeNameFeedBackMessage}
            />
          </Div>
        </Row>
        <Row ml="0" mr="0">
          <Div col="4" pr="0.625rem" pl="0.625rem">
            <FormInput
              label="City*"
              type="text"
              placeholder=""
              onChange={handleChange}
              name="city"
              value={city}
              feedBackError={cityFeedBackError}
              feedBackMessage={cityFeedBackMessage}
            />
            { /* eslint-disable */}
          <Div mb="0.3125rem">
            <div className="checkbox">
              <input onClick={handleCheckBoxChange} checked={under_warranty}  name="under_warranty" type="checkbox" id="under_warranty" />
              <label htmlFor="under_warranty" />
            </div>
            <Label fontSize="0.875em" ml="0.625rem" htmlFor="under_warranty">
                    Service visit for Product under warranty
            </Label>
          </Div>
          <Div mb="0.3125rem">
            <div className="checkbox">
              <input onClick={handleCheckBoxChange} checked={out_of_warranty} name="out_of_warranty"  type="checkbox" id="out_of_warranty" />
              <label htmlFor="out_of_warranty" />
            </div>
            <Label fontSize="0.875em" ml="0.625rem" htmlFor="out_of_warranty">
                  Service visit for Product out of warranty
            </Label>
          </Div>
          <Div mb="0.3125rem">
            <div className="checkbox">
              <input onClick={handleCheckBoxChange} checked={assembly_dismatling} name="assembly_dismatling" type="checkbox" id="assembly_dismatling" />
              <label htmlFor="assembly_dismatling" />
            </div>
            <Label fontSize="0.875em" ml="0.625rem" htmlFor="assembly_dismatling">
                  Assembly/Dismantling service
            </Label>
          </Div>
        </Div>
        {/* eslint-enable */}
          <Div col="8" pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Review*"
              onChange={handleChange}
              name="review"
              value={review}
              rows={5}
              type="textarea"
              placeholder=""
              feedBackError={reviewFeedBackError}
              feedBackMessage={reviewFeedBackMessage}
            />
          </Div>
        </Row>
        <Row ml="0" mr="0">
          <Div col="12" pr="0.625rem" pl="0.625rem" mt="0.3125rem">
            <Div mb="0.3125rem">
              <Label fontSize="0.875em" ml="0" htmlFor="checkbox">
                <b>Note:</b> Order number / Invoice required for scheduling the service visit.
              </Label>
            </Div>
          </Div>
          <Div col="2" pr="0.625rem" pl="0.625rem" mt="1rem">
            <Button
              size="block"
              btnType="primary"
              fontFamily="regular"
              height="42px"
              mt="0.625rem"
              rows={5}
              onClick={onSubmitForm}
              disable={loading || loaded}
            >
              {loading ? 'Please Wait ...' : 'SUBMIT'}
            </Button>
          </Div>
        </Row>
        { /* eslint-disable */}
      </form>
    );
  }
}

ServiceRequestForm.defaultProps = {
  email: '',
  password: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  passwordFeedBackError: false,
  passwordFeedBackMessage: '',
  loginResponse: {},
  onChangeEmail: () => {},
  onChangePassword: () => {},
  onSubmitLogin: () => {}
};

ServiceRequestForm.propTypes = {
  handleChange: PropTypes.func,
  onChangeLastName: PropTypes.func,
  onChangePhone: PropTypes.func,
  onChangeCity: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangeOrder: PropTypes.func,
  onChangeStoreName: PropTypes.func,
  onSubmitForm: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  passwordFeedBackError: PropTypes.bool,
  passwordFeedBackMessage: PropTypes.string,
  loginResponse: PropTypes.object,
  firstName: PropTypes.string,
  firstNameFeedBackError: PropTypes.bool,
  firstNameFeedBackMessage: PropTypes.string,
  lastName: PropTypes.string,
  lastNameFeedBackError: PropTypes.bool,
  lastNameFeedBackMessage: PropTypes.string,
  phone: PropTypes.string,
  phoneFeedBackError: PropTypes.bool,
  phoneFeedBackMessage: PropTypes.string,
  order: PropTypes.string,
  orderFeedBackError: PropTypes.bool,
  orderFeedBackMessage: PropTypes.string,
  storeName: PropTypes.string,
  storeNameFeedBackError: PropTypes.bool,
  storeNameFeedBackMessage: PropTypes.string,
  city: PropTypes.string,
  cityFeedBackError: PropTypes.bool,
  cityFeedBackMessage: PropTypes.string,
  review: PropTypes.string,
  reviewFeedBackError:PropTypes.bool,
  reviewFeedBackMessage:PropTypes.string,
  under_warranty:PropTypes.bool,
  out_of_warranty:PropTypes.bool,
  assembly_dismatling:PropTypes.bool,
  handleCheckBoxChange:PropTypes.func,
  loading:PropTypes.bool,
  loaded: PropTypes.bool
};
