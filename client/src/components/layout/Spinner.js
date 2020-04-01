import React from 'react';
import spinnerr from './spinnerr.gif';

 const Spinner = () => {
  return (
    <div>
      <img
        src={spinnerr}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner
