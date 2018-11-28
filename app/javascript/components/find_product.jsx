import React from 'react';

const FindProduct = (props) => {
  const formFields = {};

  return (
    <form
      onSubmit={(e) => {
        props.handleFormSubmit(formFields.barcode.value);
        e.preventDefault();
        e.target.reset();
      }}
    >
      <input ref={input => (formFields.barcode = input)} placeholder="Enter a barcode" />
      <button>Submit</button>
    </form>
  );
};

export default FindProduct;
