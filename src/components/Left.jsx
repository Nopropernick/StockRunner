import React from 'react';

function Left({ setStock }) {
  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  return (
    <div className='mt-20 w-1/4 h-4/5 '>
      <input
        type='text'
        placeholder='Input NASDAQ Ticker'
        className='border border-gray-400 px-4 py-2 w-full rounded-full outline-none'
        onChange={handleStockChange}
      />
    </div>
  );
}

export default Left;
