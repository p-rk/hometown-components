import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Div from 'components/Div';
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
    const { onClickSubmit, sku } = this.props;
    const {
      addReviewOpen, name, rating, review
    } = this.state;
    return (
      <Div>
        <button onClick={this.toggleAddReview}>WRITE A REVIEW</button>
        {addReviewOpen &&
          <form onSubmit={onClickSubmit(sku, { name, rating, review })}>

            <Div>
              <Div>
                <Label>Name</Label>
                <Input name="name" onChange={this.handleChange} />
              </Div>
              <Div>
                <Label>Rating</Label>
                <Input name="rating" onChange={this.handleChange} />
              </Div>
              <Div>
                <Label>Review</Label>
                <Input name="review" onChange={this.handleChange} />
              </Div>
              <button type="submit">SUBMIT</button>

            </Div>
          </form>
        }
      </Div>
    );
  }
}

WriteReview.defaultProps = {
};

WriteReview.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
  sku: PropTypes.string.isRequired,

};
export default WriteReview;
