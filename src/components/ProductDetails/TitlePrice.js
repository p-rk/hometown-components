import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Span from 'components/Span';
import Section from 'components/Section';
import ReactStars from 'react-stars';

const TitlePrice = ({
  name, price, discPrice, savingsRs, savingsPercentage, count, ratings
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
          lh="1.5"
          fontFamily="regular"
          ellipsis={false}
        >
          {name}
          {ratings !== 0 &&
            <Span>
              <ReactStars
                count={5}
                className="ratings"
                size={18}
                value={String(ratings)}
                half
                edit={false}
                color2="#ffd700"
              />
              <Span fontSize="1rem" color="rgba(0, 0, 0, 0.4)">({count})</Span>
              <div className="hide" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                Rated
                <span itemProp="ratingValue">({ratings})</span>/5 based on
                <span itemProp="reviewCount">{count}</span>
                customer reviews
              </div>
            </Span>
          }
        </Heading>
        <Heading
          itemProp="offers"
          itemScope
          itemType="http://schema.org/Offer"
          fontSize="1em"
          color="textDark"
          mb="0px"
          pb="2px"
          mt="0px"
          fontFamily="medium"
        >
          <span itemProp="priceCurrency" content="INR">₹</span>
          <span itemProp="price" content={discPrice.split(',').join('')}> {discPrice}</span>
          { price !== discPrice &&
            <span>
              <Span
                fontSize="0.8125em"
                color="rgba(0, 0, 0, 0.4)"
                ml="1rem"
                fontFamily="regular"
                type="lt"
              >₹ {price}</Span>
              <Span
                fontSize="0.8125em"
                color="rgba(0, 0, 0, 0.4)"
                ml="0.625rem"
                fontFamily="regular"
              >Saving ₹ {savingsRs}
                {' '}({savingsPercentage}% OFF)
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
  savingsRs: PropTypes.string,
  ratings: PropTypes.number,
  count: PropTypes.number,
};

TitlePrice.defaultProps = {
  name: '',
  price: '',
  discPrice: '',
  savingsPercentage: '',
  savingsRs: '',
  count: 0,
  ratings: 0
};

export default TitlePrice;
