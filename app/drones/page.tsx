import Heading from '@/components/Heading'
import DroneTable from '@/components/table/DroneTable'
import React from 'react'

const Drones = () => {
  return (
    <>
    <Heading tag='h3' className='pb-4'>
    Drones
  </Heading>
  <div className='w-full rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
    <div className='flex flex-col gap-8'>
        <DroneTable />
    </div>
  </div>
  </>
  )
}

export default Drones
