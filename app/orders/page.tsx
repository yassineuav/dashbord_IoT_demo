"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "@/components/Heading";
import { TimeAgo } from "@/utils/TimeAgo";
import { MyData } from "@/types";
import ProgressBar from "@/components/ProgressBar";

let socket = new WebSocket("ws://localhost:8000/ws/order/");

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(false);
  const [data, setData] = useState<MyData[]>([]);

  function connect() {
    let sockets = new WebSocket("ws://localhost:8000/ws/order/");
    sockets.onopen = function (e) {
      setLoading(false);
      setServerStatus(true);
      socket.send(
        JSON.stringify({
          action: "list",
          request_id: "my_orders",
        })
      );
    };
  }

  socket.onopen = function (e) {
    setLoading(false);
    setServerStatus(true);
    console.log("ws send: ");
    socket.send(
      JSON.stringify({
        action: "list",
        request_id: "my_orders",
        // new Date().getTime(),
      })
    );
  };

  socket.onclose = function (e) {
    setServerStatus(false);
  };

  socket.onerror = function (e) {
    console.log("websocket error:", e);
    // socket.close();
  };

  socket.onmessage = function (e) {
    setLoading(false);
    setServerStatus(true);

    let allData = JSON.parse(e.data);
    console.log("on message all data: ", allData);

    if (allData.action === "list") {
      setData(allData.data);
    } else if (allData.action === "create") {
      setData((prevData) => [...prevData, allData.data]);
      // setData((data) => [...data, allData.data]);
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
      console.log("data deleted ", newItems);
      // setItems(newItems);
      // setData(prevData => ([...prevData, ...allData.data]));
      // let newData = data.map((item) => {
      //   if (item.id === allData.data.id) {
      //     item = allData.data;
      //   }
      //   return item;
      // });
    }
  };

  if (socket.readyState === 1) {
    // console.log("ws ready ...")
  }

  const addOrders = () => {
    for (let i = 0; i < 2; i++) {
      axios
        .post("http://127.0.0.1:8000/order/", { trigger: 222 })
        .then((response) => {
          console.log(response);
        });
    }
  };

  const deleteAllOrders = (id: number) => {
    axios
      .put(`http://127.0.0.1:8000/order/${id}/`, { trigger: 111 })
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    if (loading) {
      setTimeout(function () {
        // setLoading(false);
      }, 1000);
    }
    // const socket = new WebSocket("ws://localhost:8000/ws/order/");

    //       socket.onopen = function (e) {
    //     setLoading(false);
    //     setServerStatus(true);
    //     console.log("ws send: ");
    //     socket.send(
    //       JSON.stringify({
    //         action: "list",
    //         request_id: "my_orders",
    //         // new Date().getTime(),
    //       })
    //     );
    //   };
    // Listen for messages from the WebSocket server
    // socket.addEventListener("message", (event) => {
    // setLoading(false);
    // setServerStatus(true)
    // });

    // let allData = JSON.parse(event.data);
    // console.log("on message all data: ", allData);

    // if (allData.action === "list") {
    //   setData(allData.data);
    // } else if (allData.action === "create") {
    //   setData((data) => [...data, allData.data]);
    // } else if (allData.action === "update") {
    //   // setData(prevData => ([...prevData, ...allData.data]));
    //   let newData = data.map((item) => {
    //     if (item.id === allData.data.id) {
    //       item = allData.data;
    //     }
    //     return item;
    //   });

    //   setData(newData);
    // } else if (allData.action === "delete") {
    //   const newItems = data.filter((item) => item.id !== allData.data.id);
    //   setData(newItems);
    // setItems(newItems);
    // setData(prevData => ([...prevData, ...allData.data]));
    // let newData = data.map((item) => {
    //   if (item.id === allData.data.id) {
    //     item = allData.data;
    //   }
    //   return item;
    // });
    // }

    // // Clean up the WebSocket connection when the component unmounts
    // return () => {
    //   // socket.close();
    // };
  }, []);

  return (
    <div>
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
              onClick={addOrders}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              add
            </button>
            <button
              type="button"
              onClick={() => deleteAllOrders(data[0]?.id)}
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

      <div className="w-full rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <div className="flex flex-col gap-8">
          {loading ? (
            <div className="flex-grow flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
          ) : (
            <div>
              {data?.length &&
                data?.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md ring-2 ring-gray-200 dark:ring-gray-700 mt-2">
                    <p className="dark:text-white bold text-xl">
                      Order ID: {item.id} | Weight: {item.weight} | trigger:{" "}
                      {item.trigger} | Status: {item.status} | Status id:
                      {item.status_id} | last update: {TimeAgo(item.updated_at)}
                    </p>
                    <div >
                      
                      <ProgressBar percent={item?.order_history?.length} total={15} />
                      status histories: {item?.order_history?.length}
                      <ol className="grid grid-cols-4 gap-x-4 gap-y-2">
                        {item?.order_history?.length &&
                          item?.order_history.map((status, index) => (
                            <li
                              key={status.status_id}
                              className="flex items-center text-green-600 dark:text-green-500 space-x-2.5 border border-gray-500 rounded-full shrink-0 dark:border-green-600 px-1"
                            >
                              <span className="flex items-center justify-center w-8 h-8 border border-green-600 rounded-full shrink-0 dark:border-green-500">
                                {status.status_id}
                              </span>
                              <span>
                                <h3 className="font-medium leading-tight bold">
                                  {status.status}
                                </h3>
                                <p className="text-sm text-green-600">
                                  {TimeAgo(status.updated_at)}
                                </p>
                              </span>
                            </li>
                          ))}
                      </ol>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
