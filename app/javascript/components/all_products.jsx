import React from 'react';

const AllProducts = (props) => {
  const cardStyle = {
    width: '22rem',
    margin: '0 auto',
  };
  const products = props.products.map(product => (
    <div key={product.id} className="card mt-4" style={cardStyle}>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">Description: {product.description}</p>
        <p className="card-text">Barcode: {product.barcode}</p>
      </div>
    </div>
  ));
  return <div>{products}</div>;
};
export default AllProducts;
