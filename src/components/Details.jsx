import React from 'react'

function Details({stats}) {
  const change = stats.c - stats.o;
  // Calculate the percentage change
  const percentageChange = ((stats.c - stats.o) / stats.o) * 100;
  return (
    <div className='flex flex-col justify-start rounded-2xl flex-wrap bg-white p-4'>
  <h2 className='font-semibold text-left'>Details</h2>
  <div className='mt-10 flex flex-col gap-2'>
    <div className='flex justify-between'>
      <span className='text-slate-400'>Open:</span>
      <span>${stats.o}</span>
    </div>
    <div className='flex justify-between'>
      <span className='text-slate-400'>High:</span>
      <span>${stats.h}</span> 
    </div>
    <div className='flex justify-between'>
      <span className='text-slate-400'>Low:</span>
      <span>${stats.l}</span> 
    </div>
    <div className='flex justify-between'>
      <span className='text-slate-400'>Last Price:</span>
      <span>${stats.c}</span>
    </div>
    <div className='flex justify-between'>
      <span className='text-slate-400'>% Change:</span>
      <span>{change.toFixed(2)}%</span>
    </div>
    <div className='flex justify-between'>
      <span className='text-slate-400'>Volume:</span>
      <span>{stats.v}</span>
    </div>
     </div>
    </div>
  )
}

export default Details