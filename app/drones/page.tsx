"use client";

import React, { useEffect, useState } from "react";

import Heading from "@/components/Heading";
import axios from "axios";
import DroneIcon from "@/components/icons/DroneIcon";
import { DroneData } from "@/types/DroneData";

let socket = new WebSocket("ws://localhost:8000/ws/drone/");

const Drones = () => {
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(false);
  const [data, setData] = useState<DroneData[]>([]);
  const [droneInfo, setDroneInfo] = useState<DroneData>();

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
        request_id: "my_drones",
        //new Date().getTime(),
      })
    );
  };

  socket.onmessage = function (e) {
    let allData = JSON.parse(e.data);
    console.log("on message all data: ", allData.data);

    if (allData.action === "list") {
      setData(allData.data);
      setDroneInfo(allData.data[0])
    } else if (allData.action === "create") {
      setData((prevData) => [...prevData, allData.data]);
    } else if (allData.action === "update") {
      // setData(prevData => ([...prevData, ...allData.data]));
      let newData = data.map((item) => {
        if (item.id === allData.data.id) {
          item = allData.data;
        }
        return item;
      });

      setData(newData);

      if(allData.data.id === droneInfo?.id){
        setDroneInfo(allData.data)
      }

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

  const addDrones = () => {
    for (let i = 0; i < 4; i++) {
      axios
        .post("http://127.0.0.1:8000/drone/", {
          name: `DRONE_AA_0${i}`,
          status: "ON",
          status_fly: "ready",
          status_battery: "full",
          weight: 20,
          distance: 10,
        })
        .then((response) => {
          console.log(response);
        });
    }
  };
  const deleteAllDrones = () => {
    {
      data &&
        data.map((item) =>
          axios
            .delete(`http://127.0.0.1:8000/drone/${item.id}/`)
            .then((response) => {
              console.log(response);
            })
        );
    }
  };

  const handleOnClick = (droneStatus:DroneData) => {
    if (droneStatus.status === "ON") {
      droneStatus.status = "OFF";
    } else {
      droneStatus.status = "ON";
    }

    console.log(droneStatus);
    axios
      .put(`http://localhost:8000/drone/${droneStatus.id}/`, droneStatus)
      .then((response) => {
        console.log(response);
        // setDroneInfo(response.data)
      });
  };
  useEffect(() => {
    if (loading) {
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-start-1 col-end-3">
          <Heading tag="h3" className="pb-4">
            Orders
          </Heading>
        </div>
        <div className="col-end-10 col-span-6">
          <div className="grid grid-cols-4 gap-6 justify-center">
            <Heading tag="h3" className="pt-2">
              Count: {data?.length}
            </Heading>
            <button
              type="button"
              onClick={addDrones}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              add
            </button>
            <button
              type="button"
              onClick={() => deleteAllDrones()}
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
            >
              delete all
            </button>
            <button
              type="button"
              onClick={() => {
                connect();
              }}
              className={`${
                serverStatus
                  ? "bg-green-600 hover:bg-green-800"
                  : "bg-red-600 hover:bg-red-800"
              } text-white font-bold py-2 px-4 rounded`}
            >
              Server {serverStatus ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 sm:p-2">
        <div className="flex flex-col gap-8">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500" />
            </div>
          ) : (
            <div className="flex ">
              {/* overflow-auto h-screen  scrollbar-none */}
              <div className="flex-col space-y-2 overflow-auto h-screen  overscroll-contain">
                {data && Array.isArray(data) ? (
                  data.map((drone, index) => (
                    <div
                      key={drone.id}
                      onClick={() => {
                        setDroneInfo(drone);
                      }}
                      className="w-40 mr-3 bg-white dark:bg-gray-700 p-1 rounded-lg shadow-md ring-2 ring-gray-200 dark:ring-gray-700"
                    >
                      <div className="flex justify-between">
                        <div className="bg-green-500 text-sm dark:text-gray-100 rounded px-1">
                          {drone.battery}%
                        </div>
                        <div className="text-xs ">12 lb</div>
                        <div
                          className={`h-4 w-4  rounded-full ${
                            drone.status.toLowerCase() === "on"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                      </div>
                      <div className="flex justify-center items-center ">
                        <DroneIcon
                          width={70}
                          height={70}
                          strokeWidth="2"
                          color={`${
                            drone.status.toLowerCase() === "on"
                              ? "green"
                              : "red"
                          }`}
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="text-xs text-gray-500 dark:text-gray-300">
                          {drone.name
                            .toLowerCase()
                            .replace("drone_", "")
                            .toUpperCase()}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-300">
                          {drone.status_order}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
              </div>

              <div className="w-11/12 h-screen ml-2 p-2 dark:bg-gray-800 bg-white rounded-lg shadow-md ring-2 ring-gray-200 dark:ring-gray-700 bg-gradient-to-br from-gray-800 to-gray-600  ">
                {/* <div className="w-6/12 text-lg object-center break-words ">
                      DRONE INFO : 
                    </div> */}

                {/* {JSON.stringify(droneInfo)} */}

                {droneInfo ? (
                  <div className="flex col-auto gap-2">
                    <div className="w-48 h-48 items-center p-1 text-center border border-green-200 shadow-md rounded-lg">
                      {droneInfo.name.toUpperCase()}
                      <div className="text-gray-300 text-sm">details</div>
                      <div className="flex flex-col ">
                        <button
                        
                          onClick={()=>handleOnClick(droneInfo)}
                          className={`p-2 m-2 rounded-md font-semibold text-white ${droneInfo.status === "ON"? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600' }`}
                        >
                          Turn {droneInfo.status === "ON" ? "OFF" : "ON"}
                        </button>
                      </div>
                    </div>

                    <div className="w-48 h-48 items-center p-1 text-center border border-green-200 shadow-md rounded-lg">
                      Battery: {droneInfo.battery}%
                      <div className="text-gray-300 text-sm">details</div>
                    </div>

                    <div className="w-48 h-48 items-center p-1 text-center border border-green-200 shadow-md rounded-lg">
                      Distance: {droneInfo.distance} miles
                      <div className="text-gray-300 text-sm">details</div>
                    </div>

                    <div className="w-48 h-48 items-center p-1 text-center border border-green-200 shadow-md rounded-lg">
                      weight : {droneInfo.weight} lb
                      <div className="text-gray-300 text-sm">details</div>
                    </div>
                    <div className="w-48 h-48 items-center p-1 text-center border border-green-200 shadow-md rounded-lg">
                      Order : {droneInfo.status_order}
                      <div className="text-gray-300 text-sm">details</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-lg text-sky-300"> No info clicked!!</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Drones;
