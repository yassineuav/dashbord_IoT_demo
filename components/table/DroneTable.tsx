import React from "react";

const DroneTable = (data) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light dark:border-neutral-500">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Drone Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Battery
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    distance
                  </th>
                  <th scope="col" className="px-6 py-4">
                    weight
                  </th>
                  <th scope="col" className="px-6 py-4">
                    lastUpdate
                  </th>
                </tr>
              </thead>
              <tbody>
                {data && Array.isArray(data) ? (
                  data.map((item, index) => {
                    return (
                      <tr
                        className="border-b dark:border-neutral-500"
                        key={index}
                      >
                        <td className="whitespace-nowrap p-2">{item.name}</td>
                        <td className="whitespace-nowrap p-2">
                          {item.battery}
                        </td>
                        <td className="whitespace-nowrap p-2">{item.status}</td>
                        <td className="whitespace-nowrap p-2">
                          {item.distance}
                        </td>
                        <td className="whitespace-nowrap p-2">
                          {item.distance}
                        </td>
                        <td className="whitespace-nowrap p-2">
                          {item.updated_at}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <p>No data available</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneTable;
