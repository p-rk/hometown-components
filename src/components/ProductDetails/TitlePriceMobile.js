import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Span from 'components/Span';
import Section from 'components/Section';
import Div from 'components/Div';
import ReactStars from 'react-stars';

const TitlePrice = ({
  name, price, discPrice, savingsRs, savingsPercentage, count, ratings
}) => (
  <Section mb="0.3125rem" p="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mr="0" ml="0">
        <Heading
          itemProp="name"
          fontSize="14px"
          color="textDark"
          mb="0"
          mt="0"
          lh="1.5"
          fontFamily="light"
          ellipsis={false}
          pb="5px"
        >
          {name}
        </Heading>
        <Row display="block" mr="0" ml="0">
          <Div col="12">
            <Heading
              itemProp="offers"
              itemScope
              itemType="http://schema.org/Offer"
              fontSize="1.125em"
              color="primary"
              mb="0px"
              pb="0"
              mt="0px"
              fontFamily="regular"
              ellipsis={false}
            >
              <Span
                va="text-top"
                itemProp="priceCurrency"
                content="INR"
                color="#f98d29"
                fontSize="1.2rem"
              >₹</Span>
              <Span
                itemProp="price"
                va="text-top"
                content={discPrice.split(',').join('')}
                color="#f98d29"
                fontSize="1.2rem"
              > {discPrice}</Span>
              { price !== discPrice &&
              <Span
                fontSize="0.875rem"
                color="rgba(0, 0, 0, 0.4)"
                ml="0.75rem"
                fontFamily="light"
                type="lt"
                va="middle"
                lh="2.2"
              >₹ {price}</Span>
              }
            </Heading>
            <Heading
              itemScope
              itemType=""
              fontSize="1rem"
              color="textDark"
              mb="0px"
              pb="2px"
              mt="0px"
              fontFamily="medium"
            >
              { price !== discPrice &&
              <Span
                fontSize="0.8125em"
                color="rgba(0, 0, 0, 0.4)"
                ml="0"
                fontFamily="light"
                va="middle"
              >Saving ₹ {savingsRs}
                {' '}({savingsPercentage}% OFF)
              </Span>
              }
            </Heading>
          </Div>
          <Div col="12" ta="right" mt="2px">
            {ratings !== 0 &&
            <Row display="block" mr="0" ml="0">
              <Div col="12">
                <ReactStars
                  count={5}
                  className="ratings"
                  size={18}
                  value={Number(ratings)}
                  half
                  edit={false}
                  color2="rgb(255, 215, 0)"
                />
                <Span
                  className="ratingsCount"
                  fontSize="0.875rem"
                  color="#29d"
                  float="left"
                  mt="4px"
                >({count} Review{Number(count) === 1 ? '' : 's'})</Span>
                <div className="hide" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                Rated
                  <span itemProp="ratingValue">{ratings}</span>/5 based on
                  <span itemProp="reviewCount">{count}</span>
                    customer reviews
                </div>
              </Div>
            </Row>
            }
          </Div>
        </Row>
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
