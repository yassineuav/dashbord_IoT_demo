import Heading from '@/components/Heading'
import React from 'react'

const Weather = () => {
  return (
    <>
    <Heading tag='h1' className='pb-4'>
    Weather Condition
  </Heading>
  <div className='w-full rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
    <div className='flex flex-cols gap-2'>
     <div className='w-48 h-40 border p-2 border-gray-200 rounded-md shadow-slate-100 shadow-sm text-center'>
        Weather Condition based on location of orders</div>
     <div className='w-48 h-40 border p-2 border-gray-200 rounded-md shadow-sm shadow-slate-100 text-center'>Wind Condition
      <br/>Speed : 12 mph <br/>deraction : East/North<br/>height/button atmosphere<br/> </div>
      <div className='w-48 h-40 border p-2 border-gray-200 rounded-md shadow-slate-100 shadow-sm text-center'>
        more ifo about weather <br/> use hard condition in trained model</div>

    </div>
  </div>
  </>
  )
}

export default Weather
