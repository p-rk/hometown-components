import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Span from 'components/Span';
import Section from 'components/Section';
import ReactStars from 'react-stars';

const TitlePrice = ({
  name, price, discPrice, savingsRs, savingsPercentage
}) => (
  <Section mb="0.3125rem" p="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mr="0" ml="0">
        <Heading
          itemProp="name"
          fontSize="1.25em"
          color="textDark"
          mb="0.75rem"
          mt="0px"
          fontWeight="500"
        >
          {name}
          <ReactStars
            count={5}
            className="ratings"
            size={18}
            value="3.5"
            half
            edit={false}
            color2="#ffd700"
          />
          <Span fontSize="1rem" color="rgba(0, 0, 0, 0.4)">(5)</Span>
          <div className="hide" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
            Rated
            <span itemProp="ratingValue">4.5</span>/5 based on
            <span itemProp="reviewCount">5</span>
            customer reviews
          </div>
        </Heading>
        <Heading
          itemProp="offers"
          itemScope
          itemType="http://schema.org/Offer"
          fontSize="1em"
          color="textDark"
          mb="0px"
          mt="0px"
          fontWeight="600"
        >
          <span itemProp="priceCurrency" content="INR">₹</span>
          <span itemProp="price" content={discPrice}>{discPrice}</span>
          { price !== discPrice &&
            <span>
              <Span
                fontSize="0.8125em"
                color="rgba(0, 0, 0, 0.4)"
                ml="1rem"
                fontWeight="600"
                type="lt"
              >₹ {price}</Span>
              <Span
                fontSize="0.8125em"
                color="rgba(0, 0, 0, 0.4)"
                ml="1rem"
                fontWeight="600"
              >Saving ₹ {savingsRs}
              ({savingsPercentage}% OFF)
              </Span>
            </span>
          }
        </Heading>
      </Row>
    </Container>
  </Section>
);

TitlePrice.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  discPrice: PropTypes.string,
  savingsPercentage: PropTypes.string,
  savingsRs: PropTypes.string
};

TitlePrice.defaultProps = {
  name: '',
  price: '',
  discPrice: '',
  savingsPercentage: '',
  savingsRs: ''
};

export default TitlePrice;
