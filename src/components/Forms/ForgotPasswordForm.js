import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'components/Buttons';
import Row from 'components/Row';
import Div from 'components/Div';
import { FeedBackMessage, Label } from 'components/Label';
import FormInput from './FormInput';

export default class ForgotPasswordForm extends Component {
  render() {
    const {
      email,
      onChangeEmail,
      emailFeedBackError,
      emailFeedBackMessage,
      onSubmitForgot,
      forgotResponse,
      loginUrl
    } = this.props;
    const { loading, error } = forgotResponse;
    return (
      <form onSubmit={onSubmitForgot}>
        <FormInput
          label="Email ID"
          type="text"
          placeholder=""
          onChange={onChangeEmail}
          value={email}
          feedBackError={emailFeedBackError}
          feedBackMessage={emailFeedBackMessage}
        />
        <Row ml="0" mr="0" mt="1.25rem">
          <Div col="8" pt="6px">
            <Label color="textDark" mr="0.3126rem">
              Continue to
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
            >
              {(forgotResponse && !loading) ? 'SUBMIT' : 'Please wait...' }
            </Button>
          </Div>
        </Row>

        {(forgotResponse
          && !loading
          && error) ? <FeedBackMessage
            type="error"
            ta="center"
            fontSize="0.875rem"
            mt="1rem"
            display="block"
          >Some Error Happened, Please Try Again</FeedBackMessage> : null
        }
      </form>
    );
  }
}

ForgotPasswordForm.defaultProps = {
  email: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  forgotResponse: {},
  onChangeEmail: () => {},
  onSubmitForgot: () => {},
  loginUrl: ''
};

ForgotPasswordForm.propTypes = {
  onChangeEmail: PropTypes.func,
  onSubmitForgot: PropTypes.func,
  email: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  forgotResponse: PropTypes.object,
  loginUrl: PropTypes.string
};
