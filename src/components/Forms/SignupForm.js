import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';

export default class SignupForm extends Component {
  render() {
    const {
      email,
      phone,
      password,
      onChangeEmail,
      onChangePhone,
      onChangePassword,
      emailFeedBackError,
      emailFeedBackMessage,
      phoneFeedBackError,
      phoneFeedBackMessage,
      passwordFeedBackError,
      passwordFeedBackMessage,
      onSubmitSignup,
      loading,
      loginUrl,
      phonemandatory
    } = this.props;
    return (
      <form onSubmit={onSubmitSignup}>
        <FormInput
          label="Email ID *"
          type="text"
          placeholder=""
          onChange={onChangeEmail}
          value={email}
          feedBackError={emailFeedBackError}
          feedBackMessage={emailFeedBackMessage}
        />
        <FormInput
          label={phonemandatory ? 'Phone *' : 'Phone'}
          type="text"
          placeholder=""
          onChange={onChangePhone}
          value={phone}
          feedBackError={phoneFeedBackError}
          feedBackMessage={phoneFeedBackMessage}
        />
        <FormInput
          label="Password *"
          type="password"
          placeholder=""
          onChange={onChangePassword}
          value={password}
          feedBackError={passwordFeedBackError}
          feedBackMessage={passwordFeedBackMessage}
        />
        <Row ml="0" mr="0" mt="1.25rem">
          <Div col="8" pt="6px">
            <Label color="textDark" mr="0.3126rem">
              Already have an account.?
            </Label>
            <Link to={loginUrl}>
              <Label color="primary">Sign in</Label>
            </Link>
          </Div>
          <Div col="4">
            <Button
              size="block"
              btnType="primary"
              fontFamily="regular"
              height="42px"
              disabled={loading}
              fontSize="0.875rem"
            >
              {!loading ? 'SIGN UP' : 'Please wait...' }
            </Button>
          </Div>
        </Row>
      </form>
    );
  }
}

SignupForm.defaultProps = {
  email: '',
  phone: '',
  password: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  phoneFeedBackError: false,
  phoneFeedBackMessage: '',
  passwordFeedBackError: false,
  passwordFeedBackMessage: '',
  onChangeEmail: () => {},
  onChangePhone: () => {},
  onChangePassword: () => {},
  onSubmitSignup: () => {},
  loading: false,
  loginUrl: '',
  phonemandatory: false,
};

SignupForm.propTypes = {
  onChangeEmail: PropTypes.func,
  onChangePhone: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitSignup: PropTypes.func,
  email: PropTypes.string,
  phone: PropTypes.string,
  password: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  phoneFeedBackError: PropTypes.bool,
  phoneFeedBackMessage: PropTypes.string,
  passwordFeedBackError: PropTypes.bool,
  passwordFeedBackMessage: PropTypes.string,
  loading: PropTypes.bool,
  loginUrl: PropTypes.string,
  phonemandatory: PropTypes.bool,
};
