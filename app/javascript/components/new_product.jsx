import React from 'react';

const NewProduct = (props) => {
  const formFields = {};

  return (
    <form>
      <input ref={input => (formFields.name = input)} placeholder="Enter the name of the item" />
      <input ref={input => (formFields.description = input)} placeholder="Enter a description" />
      <input ref={input => (formFields.barcode = input)} placeholder="Enter a barcode" />
      <button>Submit</button>
    </form>
  );
};

export default NewProduct;
