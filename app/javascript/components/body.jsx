import React from 'react';
import AllProducts from './all_products';
import FindProduct from './find_product';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      barcode: '',
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.getFindProduct = this.getFindProduct.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/products.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
  }

  getFindProduct(product) {
    console.log(product);
  }

  // 070989105591
  handleFormSubmit(barcode) {
    this.state.products.forEach((key) => {
      if (key.barcode == barcode) {
        this.state.barcode = key.id;
      } else {
        console.log('NOT FOUND');
      }
    });
    // const body = JSON.stringify({ product: { barcode } });
    fetch(`http://localhost:3000/api/v1/products/${this.state.barcode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: undefined,
    })
      .then(response => response.json())
      .then((product) => {
        this.getFindProduct(product);
      });
  }

  render() {
    return (
      <div>
        <FindProduct handleFormSubmit={this.handleFormSubmit} />
        <AllProducts products={this.state.products} />
      </div>
    );
  }
}

export default Body;
