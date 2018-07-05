import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Div from 'components/Div';
import Row from 'components/Row';
import Button from 'components/Buttons';
import Theme from 'components/Theme';
import { Label } from 'components/Label';

class WriteReview extends React.Component {
  state={
    addReviewOpen: false,
    name: '',
    rating: '',
    review: '',
  }
  handleChange=e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
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
      addReviewOpen, name, rating, review
    } = this.state;
    return (
      <Row display="block" mt="0.625rem" mb="0.625rem" mr="1.25rem" ml="1.25rem">
        <Div>
          <Label color="textExtraLight">Already bought this product?</Label>
          <Button
            onClick={this.toggleAddReview}
            btnType="link"
            color={Theme.colors.primary}
            fontSize="0.875rem"
            lh="1"
          >Write a Review</Button>
          {addReviewOpen &&
          <form onSubmit={onClickSubmit(catalogId, { name, rating, review })}>
            <Div col={col} mt="0.5rem">
              <Div mb="0.625rem">
                <Label>Name</Label>
                <Input name="name" onChange={this.handleChange} />
              </Div>
              <Div mb="0.625rem">
                <Label>Rating</Label>
                <Input name="rating" onChange={this.handleChange} />
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
                  fontWeight="regular"
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
