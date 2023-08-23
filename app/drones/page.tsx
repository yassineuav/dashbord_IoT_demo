'use client'

import Heading from '@/components/Heading'
import DroneTable from '@/components/table/DroneTable'
import React , { useEffect, useState } from 'react'

import axios from "axios";

let socket = new WebSocket("ws://localhost:8000/ws/drone/");

const Drones = () => {
    const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(false);
  const [data, setData] = useState([]);


  function connect() {
    let sockets = new WebSocket("ws://localhost:8000/ws/drone/");
    sockets.onopen = function (e) {
      setLoading(false);
      setServerStatus(true);
      socket.send(
        JSON.stringify({
          action: "list",
          request_id: "my_drones",
        })
      );
    };
  }


    socket.onopen = function (e) {
        setLoading(false);
        console.log("ws send: ");
        socket.send(
          JSON.stringify({
            action: "list",
            request_id: "my_drones" 
            //new Date().getTime(),
          })
        );
      };
    
      socket.onmessage = function (e) {
        let allData = JSON.parse(e.data);
        console.log("on message all data: ", allData.data);
     
        if (allData.action === "list") {
            setData(allData.data);
          } else if (allData.action === "create") {
            setData((data) => [...data, allData.data]);
          } else if (allData.action === "update") {
            // setData(prevData => ([...prevData, ...allData.data]));
            let newData = data.map((item) => {
              if (item.id === allData.data.id) {
                item = allData.data;
              }
              return item;
            });  
      
            setData(newData);
          } else if (allData.action === "delete") {
            const newItems = data.filter((item) => item.id !== allData.data.id);
            setData(newItems);
      
          }

    
      };
      socket.onclose = function (e) {
        setServerStatus(false);
      };
    
      socket.onerror = function (e) {
        console.log("websocket error:", e);
        // socket.close();
      };
    

      const addOrders = () => {
        for (let i = 0; i < 10; i++) {
          axios
            .post("http://127.0.0.1:8000/drone/", { trigger: 222 })
            .then((response) => {
              console.log(response);
            });
        }
      };
      const deleteAllOrders = (id) => {
          axios
            .put(`http://127.0.0.1:8000/drone/${id}/`, { trigger: 111 })
            .then((response) => {
              console.log(response);
            });
      };
    
    const handleOnClick = (droneStatus)  =>  {
    
      if (droneStatus.status === "ON"){
        droneStatus.status = "OFF";
      }else{
        droneStatus.status = "ON";
      }

      console.log(droneStatus)
      axios.put(`http://localhost:8000/drone/${droneStatus.id}/`, droneStatus)
      .then((response) => {
        console.log(response)
      });
  
    };
    useEffect(() => {
        if (loading) {
            setTimeout(function () {
              setLoading(false);
            }, 2000);
          } 
    }, []);
  
    return (
    <>
    <Heading tag='h3' className='pb-4'>
    Drones
  </Heading>
  <div className='w-full rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
    <div className='flex flex-col gap-8'>
        test json drones list
        {/* {JSON.stringify(data)} */}
        {loading ? (
          <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
        ) : (<table className="min-w-full text-left text-sm font-light dark:border-neutral-500">
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
                  key={item.id}
                >
                  <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.battery}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 ">
                    {item.status}
                    </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.distance}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.weight}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.updated_at}
                  </td>
                </tr>
              );
            })
          ) : (
            <p>No data available</p>
          )}
        </tbody>
      </table>)}
    </div>
  </div>
  </>
  )
}

export default Drones
