import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Div from 'components/Div';
import Row from 'components/Row';
import Button from 'components/Buttons';
import Theme from 'components/Theme';
import { Label } from 'components/Label';
import ReactStars from 'react-stars';

class WriteReview extends React.Component {
  state={
    addReviewOpen: false,
    name: '',
    rating: 0,
    review: '',
  }
  handleChange=e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
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
      addReviewOpen: !this.state.addReviewOpen
    });
  }

  render() {
    const { onClickSubmit, catalogId, col } = this.props;
    const {
      addReviewOpen, name, review, rating
    } = this.state;
    return (
      <Row display="block" mt="0.625rem" mb="0.625rem" mr="1rem" ml="1rem">
        <Div>
          <Label color="textExtraLight">Already bought this product?</Label>
          <Button
            onClick={this.toggleAddReview}
            btnType="custom"
            color={Theme.colors.primary}
            fontSize="0.875rem"
            lh="1"
            p="0.75rem 1rem"
            ml="0.625rem"
          >Write a Review</Button>
          {addReviewOpen &&
          <form onSubmit={onClickSubmit(catalogId, { name, rating, review })}>
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
                <Label>Name</Label>
                <Input name="name" onChange={this.handleChange} />
              </Div>
              <Div mb="1rem">
                <Label>Review</Label>
                <Input name="review" onChange={this.handleChange} />
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
  col: PropTypes.string
};
export default WriteReview;
