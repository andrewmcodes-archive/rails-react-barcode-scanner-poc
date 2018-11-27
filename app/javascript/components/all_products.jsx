import React from 'react';

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('/api/v1/products.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
  }

  render() {
    const products = this.state.products.map(product => (
      <div key={product.id}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.barcode}</p>
      </div>
    ));
    return <div>{products}</div>;
  }
}

export default AllProducts;
