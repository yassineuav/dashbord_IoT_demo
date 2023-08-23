import React from 'react'

const DroneTable = () => {
  return (
    

        <table className="border-collapse border border-slate-500 min-w-full text-center text-sm ">
          <thead className="border-b font-medium">
            <tr>
              <th scope="col" className="p-2 ">class</th>
              <th scope="col" className="p-2 ">Heading</th>
              <th scope="col" className="p-2 ">Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500 bg-orange-400 text-gray-800">
              <td className="whitespace-nowrap p-2 font-medium">
                Default
              </td>
              <td className="whitespace-nowrap p-2">Cell</td>
              <td className="whitespace-nowrap p-2">Cell</td>
            </tr>
            <tr
              className="border-b border-primary-20">
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                Primary
              </td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
           
           
          </tbody>
        </table>
  )
}

export default DroneTable
