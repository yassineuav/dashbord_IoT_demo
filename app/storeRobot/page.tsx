"use client";

import Heading from "@/components/Heading";
import DroneIcon from "@/components/icons/DroneIcon";
import { DoorDataType, RobotDataType } from "@/types/StoreData";
import React, { useEffect, useState } from "react";

let a = 1;
let b = true;

const StoreRobot = () => {
  const products = [
    { id: 1, name: "CocaCola", y: "A", x: 1 },
    // { id: 3, name: "abos", y: "C", x: 1 },
    // { id: 4, name: "iswn", y: "B", x: 4 },
    // { id: 4, name: "iswn", y: "D", x: 4 },
    // { id: 4, name: "iswn", y: "B", x: 1 },
  ];

  const robots = [
    {
      id: 1,
      location_x: 1,
      location_y: "A",
      location_vertical: true,
      name: "Robot_1",
      power_status: "ON",
      movemont_status: "moving",
      package_status: "empty",
    },
  ];

  const aislesData = {
    id: 1,
    store_id: "store_0001",
    string_name: "store 0001",
    aisle_x: [1, 2, 3, 4],
    aisle_y: ["A", "B", "C", "D"],
    doors: 4,
  };

  const doorInfo = [
    { id: 1,
    status: 'open',
    package: 'full',
    drone_in:true,
    drone_id:'drone_A12',
    drone_power_status:'on',
    drone_package_status:'full',
    },
    { id: 2,
    status: 'close',
    package: 'empty',
    drone_in:true,
    drone_id:'drone_A12',
    drone_power_status:'off',
    drone_package_status:'empty',
    },
    { id: 3,
    status: 'close',
    package: 'empty',
    drone_in:false,
    drone_id:'drone_A12',
    drone_power_status:'off',
    drone_package_status:'empty',
    },
    { id: 4,
    status: 'close',
    package: 'empty',
    drone_in:true,
    drone_id:'drone_A12',
    drone_power_status:'on',
    drone_package_status:'empty',
    },
]


  const [robotData, setRobotData] = useState<RobotDataType[]>(robots);
  const [doorData, setDoorData] = useState<DoorDataType[]>(doorInfo);





  const handleMoveToTheDoor = () => {
    if (a < 4) {
      a++;
    } else if (a === 4) {
      b = false;
      a = 4;
    }
    const robot = {
      id: 1,
      location_x: a,
      location_y: "A",
      location_vertical: b,
      name: "Robot_1",
      power_status: "ON",
      movemont_status: "moving",
      package_status: "empty",
    };

    // delete product aisle info
    // const updatedData = products.filter(item => item.id !== 1);
    // setProductData(updatedData);

   


    let newRobotData = robotData?.map((item) => {
      if (item.id === robot.id) {
        return robot;
      }
    });

    setTimeout(function () {
      // console.log(newRobotData, "x: ", a, "b", b);
      setRobotData(newRobotData);
      
    }, 1000);
  };

  const handleResetPosition = () => {
    setRobotData(robots);
    a=0;
    b=true;
  };

  useEffect(() => {
    if (true) {
      setTimeout(function () {
        // setRobotData(robotData)
      }, 1000);
    }
  }, []);

  // controll aisles crud product by robot
  // controll robot on/off move from spot x,y to door_1...4
  // controll door close/open | product in > drone on

  // product A_1 in A1
  // robot location {x,y,d} waiting for order
  // door_1...4 closed / drone in/
  // step 1: waiting to set an order for product A_1 in A1
  // step 2: order set status product in aisle A1
  // step 3: get robot status on and location {x, y, d}
  // step 4: calule the distance from robot to spot A1
  // step 5: get near by robot
  // step 6: move the robot_n to spot A1
  // step 8: pick product A_1
  // step 9: set aisle A1 empty
  // step 10: check which door ready and drone on and in_door
  // step 11: move robot_n with product A_1 to Door_n
  // step 12: drop off product A_1 in door_n in drone
  // step 12: notify system product A_1 in Door_n in Drone_n is ready_to_fly

  return (
    <>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-start-1 col-end-3">
          <Heading tag="h3" className="pb-4">
            Store aisles &lt;&gt; Robot &lt;&gt; Line &lt;&gt; pickup/unload
            Door
          </Heading>
        </div>
        <div className="col-end-10 col-span-6">
          <div className="grid grid-cols-4 gap-6 justify-center">
            <Heading tag="h3" className="pt-2">
              products: {products?.length}
            </Heading>
            <button
              type="button"
              onClick={handleMoveToTheDoor}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              move robot
            </button>
            <button
              type="button"
              onClick={handleResetPosition}
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
            >
              reset
            </button>
            <button
              type="button"
              className={`${
                false
                  ? "bg-green-600 hover:bg-green-800"
                  : "bg-red-600 hover:bg-red-800"
              } text-white font-bold py-2 px-4 rounded`}
            >
              Server{/* Server {serverStatus ? "ON" : "OFF"} */}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <div className="flex flex-row m-1 p-1">
          {/* Aisels | Lines | Robot | door */}

          <div className="border-2 justify-center border-gray-400 justify-items-center rounded-md p-2 m-1">
            <div className="text-green-500 text-xl font-bold text-center">
              Aisles
            </div>
            <div className="grid grid-cols-4 gap-0 border-2 border-sky-400 m-1 p-1">
              {aislesData.aisle_y.map((y, index_y) => (
                <div key={index_y} className="">
                  {aislesData.aisle_x.map((x, index_x) => (
                    <div
                      key={index_x}
                      className="grid grid-rows-1 grid-flow-col gap-0 "
                    >
                      <div
                        className={`row-span-3 border border-blue-400 h-20 w-4 m-0 p-0 `}
                      >
                        {robotData.map((robot, index) => (
                          <div key={index}>
                            {robot.location_vertical === true &&
                              robot.location_x === x &&
                              robot.location_y === y && (
                                <div className="bg-white h-20 w-4 " />
                              )}
                          </div>
                        ))}
                      </div>

                      <div
                        className={`border border-gray-400 h-20 w-20  text-lg text-center  justify-items-center justify-center`}
                      >
                        {`${y}${x}`}

                        {products?.map((product, index) => (
                          <div key={index} className="bg-green-500">
                            {product.x === x && product.y === y && (
                              <div>
                                <div className="text-xs">id:{product.id}</div>
                                <div className="text-sm">{product.name}</div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="row-span-2 col-span-2 border border-green-500 h-4 w-20 m-0 p-0 ">
                        {robotData?.map((robot, index) => (
                          <div key={index}>
                            {robot.location_vertical === false &&
                              robot.location_x === x &&
                              robot.location_y === y && (
                                <div className="bg-white h-4 w-20 " />
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              {doorData.map((door, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1  h-20 w-20 ml-4 justify-items-center justify-center
                  ${door.status === "open" ? "border-4 border-green-300":"border border-gray-500" }
                  ${door.package=== "full" ? "bg-green-600": ""}
                  `}
                >
                  <div className={`text-sm text-center `}>{`door_${door.id}`}</div>
                  <div>
                    {door.drone_in === true && 
                    <DroneIcon
                    width={30}
                    height={30}
                    color={door.drone_power_status === "on" ? "white":"gray"}
                    strokeWidth={door.drone_package_status== "full" ? "2": "1"}
                    />
                  }
                  </div>
                  <div className="text-xs text-white">{door.status}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 justify-center border-gray-400 justify-items-center rounded-md p-2 m-1">
            <div className="text-green-500 text-xl font-bold text-center">
              Robot
            </div>
            <div className="grid grid-cols-4 gap-0  w-80 h-80 border border-gray-400 m-1 p-1">
              <div className="">time code </div>
            </div>

            <div className="w-80 border border-gray-400 m-1 p-1">
              <div className="grid grid-cols-4 gap-2 ">
                {robotData?.length &&
                  robotData.map((robot, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-1 border border-gray-500 p-1 items-center justify-between"
                    >
                      <div className="text-md font-bold text-center">
                        {robot.name.charAt(0).toUpperCase() +
                          robot.name.slice(1)}
                      </div>
                      <button className="rounded-md bg-green-600 text-sm w-12">
                        {robot.power_status}
                      </button>
                      <button className="rounded-md bg-yellow-500 text-gray-800 text-sm px-1">
                        {robot.movemont_status}
                      </button>
                      <button className="rounded-md bg-yellow-700 text-sm font-bold px-1">
                        {robot.location_y}
                        {robot.location_x}_{robot.location_vertical ? "V" : "H"}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreRobot;
