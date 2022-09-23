import React from 'react'
import propTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  const url  = image || image.url
  return (
    <article className='product'>
      <h4>single product</h4>
      <img src={url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
}

Product.prototype = {
  image: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  price:propTypes.number.isRequired
};

// Product.defaultProps = {
//   name:'default name',
//   price: 4.99,
//   image:defaultImage
// }

export default Product
