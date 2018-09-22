import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import Div from 'components/Div';
import { Label } from 'components/Label';
import FormInput from './FormInput';

export default class FeedBackForm extends Component {
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
      instore,
      aftersale,
      fitment,
      delivery,
      loading,
      loaded,
    } = this.props;
    return (
      <form onSubmit={onSubmitForm}>
        <Div col="4" pr="0.625rem" pl="0.625rem">
          <FormInput
            label="First name"
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
            label="Last name"
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
            label="Registered mobile no"
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
        <Div col="4" pr="0.625rem" pl="0.625rem">
          <FormInput
            label="Email Address"
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
            label="Order number *"
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
          <Div mb="0.3125rem">
            <div className="checkbox">
              <input onClick={handleCheckBoxChange} checked={instore} name="instore" type="checkbox" id="instore" />
              <label htmlFor="instore" />
            </div>
            <Label
              fontSize="0.875em"
              ml="0.625rem"
              htmlFor="checkbox"
            >
                  Instore Experience
            </Label>
          </Div>
          <Div mb="0.3125rem">
            <div className="checkbox">
              <input onClick={handleCheckBoxChange} checked={delivery} name="delivery" type="checkbox" id="delivery" />
              <label htmlFor="delivery" />
            </div>
            <Label fontSize="0.875em" ml="0.625rem" htmlFor="delivery">
                  Delivery Experience
            </Label>
          </Div>
          <Div mb="0.3125rem">
            <div className="checkbox">
              <input onClick={handleCheckBoxChange} checked={fitment} name="fitment" type="checkbox" id="fitment" />
              <label htmlFor="fitment" />
            </div>
            <Label fontSize="0.875em" ml="0.625rem" htmlFor="fitment">
                  Fitment Experience
            </Label>
          </Div>
          <Div mb="0.3125rem">
            <div className="checkbox">
              <input
                onClick={handleCheckBoxChange}
                checked={aftersale}
                name="aftersale"
                type="checkbox"
                id="aftersale"
              />
              <label htmlFor="aftersale" />
            </div>
            <Label fontSize="0.875em" ml="0.625rem" htmlFor="aftersale">
                  After Sale service Experience
            </Label>
          </Div>
        </Div>
        <Div col="8" pr="0.625rem" pl="0.625rem">
          <FormInput
            label="Review"
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
      </form>
    );
  }
}

FeedBackForm.defaultProps = {
  email: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  firstName: '',
  firstNameFeedBackError: false,
  firstNameFeedBackMessage: '',
  lastName: '',
  lastNameFeedBackError: false,
  lastNameFeedBackMessage: '',
  phone: '',
  phoneFeedBackError: false,
  phoneFeedBackMessage: '',
  order: '',
  orderFeedBackError: false,
  orderFeedBackMessage: '',
  storeName: '',
  storeNameFeedBackError: false,
  storeNameFeedBackMessage: '',
  city: '',
  cityFeedBackError: false,
  cityFeedBackMessage: '',
  review: '',
  reviewFeedBackError: false,
  reviewFeedBackMessage: '',
  instore: false,
  aftersale: false,
  fitment: false,
  delivery: false,
  loading: false,
  loaded: false,
  handleCheckBoxChange: () => {},
  onSubmitForm: () => {},
};

FeedBackForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  email: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
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
  reviewFeedBackError: PropTypes.bool,
  reviewFeedBackMessage: PropTypes.string,
  instore: PropTypes.bool,
  aftersale: PropTypes.bool,
  fitment: PropTypes.bool,
  delivery: PropTypes.bool,
  handleCheckBoxChange: PropTypes.func,
  loading: PropTypes.bool,
  loaded: PropTypes.bool
};
