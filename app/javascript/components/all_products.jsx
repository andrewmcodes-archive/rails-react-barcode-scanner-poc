import React from 'react';

const AllProducts = (props) => {
  const products = props.products.map(product => (
    <div key={product.id}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  ));
  return <div>{products}</div>;
};
export default AllProducts;
