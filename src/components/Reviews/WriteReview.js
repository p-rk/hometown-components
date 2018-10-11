import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Div from 'components/Div';
import Row from 'components/Row';
import Button from 'components/Buttons';
import Theme from 'components/Theme';
import { Label } from 'components/Label';
import ReactStars from 'react-stars';
import FormInput from '../Forms/FormInput';

const WriteReviewBtn = styled(Button)`
  &:hover {
    opacity: 0.8;
  }
`;

class WriteReview extends React.Component {
  state={
    name: '',
    rating: 0,
    review: '',
    nameError: false,
    nameErrorMessage: 'Name Cannot Be Blank',
    reviewError: false,
    reviewErrorMessage: 'Review cannot be left Blank',
    addreview: true
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.added && nextProps.added !== this.props.added) {
      this.setState({ addreview: false });
    }
  }
  handleChange=e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      [`${name}Error`]: false
    });
  }
  ratingChanged = newRating => {
    this.setState({
      rating: newRating
    });
  }

  toggleAddReview = e => {
    e.preventDefault();
    this.setState({
      rating: 0,
      addreview: !this.state.addreview
    });
  }
  handleSubmit =e => {
    e.preventDefault();
    const { onClickSubmit, catalogId } = this.props;
    const {
      name, review, rating,
    } = this.state;
    const nameError = !(name.length > 0);
    const reviewError = !(review.length > 0);
    if (nameError || reviewError) {
      return this.setState({
        nameError,
        reviewError
      });
    }
    onClickSubmit(catalogId, { name, rating, review });
  }
  render() {
    const {
      col
    } = this.props;
    const {
      addreview,
      nameError, nameErrorMessage, reviewError, reviewErrorMessage, name, review
    } = this.state;

    return (
      <Row display="block" mt="0.625rem" mb="0.625rem" mr="1rem" ml="1rem">
        <Div>
          <Label color="textExtraLight">Already bought this product?</Label>
          <WriteReviewBtn
            onClick={this.toggleAddReview}
            btnType="primary"
            color={Theme.colors.primary}
            fontSize="0.875rem"
            lh="1"
            p="0.75rem 1rem"
            ml="0.625rem"
            className="btn-primary"
          >Write a Review</WriteReviewBtn>
          {(addreview) &&
          <form onSubmit={this.handleSubmit}>
            <Div col={col} mt="0.5rem">
              <Div mb="0.625rem">
                <Label>Rating</Label>
                <ReactStars
                  count={5}
                  onChange={this.ratingChanged}
                  size={20}
                  value={this.state.rating}
                  half={false}
                  color2="#ffd700"
                />
              </Div>
              <Div mb="0.625rem">
                <FormInput
                  label="Name"
                  type="text"
                  placeholder=""
                  name="name"
                  value={name}
                  feedBackError={nameError}
                  feedBackMessage={nameErrorMessage}
                  onChange={this.handleChange}
                />
              </Div>
              <Div mb="1rem">
                <FormInput
                  type="textarea"
                  label="Review"
                  rows="5"
                  name="review"
                  value={review}
                  feedBackError={reviewError}
                  feedBackMessage={reviewErrorMessage}
                  onChange={this.handleChange}
                />
              </Div>
              <Div>
                <Button
                  type="submit"
                  btnType="primary"
                  size="large"
                  fontFamily="regular"
                  fontSize="0.875em"
                  height="42px"
                  lh="2"
                >SUBMIT</Button>
              </Div>
            </Div>
          </form>
          }
        </Div>
      </Row>
    );
  }
}

WriteReview.defaultProps = {
  col: '12'
};

WriteReview.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
  catalogId: PropTypes.string.isRequired,
  col: PropTypes.string,
  added: PropTypes.bool.isRequired,
  // toggleReview: PropTypes.func.isRequired,
};
export default WriteReview;
