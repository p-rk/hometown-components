import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Div from 'components/Div';
import Row from 'components/Row';
import Button from 'components/Buttons';
import Theme from 'components/Theme';
import { Label } from 'components/Label';
import ReactStars from 'react-stars';

const WriteReviewBtn = styled(Button)`
  &:hover {
    background: #f98d29;
    color: #fff;
  }
`;

class WriteReview extends React.Component {
  state={
    name: '',
    rating: 0,
    review: '',
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
    // const { toggleReview } = this.props;
    this.setState({
      rating: 0,
      addreview: !this.state.addreview
    });
    // toggleReview();
  }

  render() {
    const {
      onClickSubmit, catalogId, col
    } = this.props;
    const {
      name, review, rating, addreview
    } = this.state;
    return (
      <Row display="block" mt="0.625rem" mb="0.625rem" mr="1rem" ml="1rem">
        <Div>
          <Label color="textExtraLight">Already bought this product?</Label>
          <WriteReviewBtn
            onClick={this.toggleAddReview}
            btnType="custom"
            color={Theme.colors.primary}
            fontSize="0.875rem"
            lh="1"
            p="0.75rem 1rem"
            ml="0.625rem"
            className="btn-primary"
          >Write a Review</WriteReviewBtn>
          {(addreview) &&
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
                <TextArea rows="5" name="review" onChange={this.handleChange} />
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
