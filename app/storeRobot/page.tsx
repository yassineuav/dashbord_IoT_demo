"use client";

import Heading from "@/components/Heading";
import DroneIcon from "@/components/icons/DroneIcon";
import { DoorDataType, ProductDataType, RobotDataType } from "@/types/StoreData";
import { robots, doorInfo, products, aislesData } from "@/utils/dummy";
import React, { useEffect, useState } from "react";

// robot
let location_x = 1;
let isVerticalLine = true;
let package_status = "empty"
let movemont_status = "moving"

// door
let doorStatus = "close";
let doorPackage = "empty";



const StoreRobot = () => {
 
  const [robotData, setRobotData] = useState<RobotDataType[]>(robots);
  const [doorData, setDoorData] = useState<DoorDataType[]>(doorInfo);
  const [productsData, setProductsData] = useState<ProductDataType[]>(products)


  const handleMoveToTheDoor = () => {
    const update_product = [{ id: 1, name: "CocaCola", locatedIn:"robot", location_y: "D", location_x: 1 }]
    
    if (location_x < 4) {
      location_x++;
      if(location_x===1){
        setProductsData(update_product)
        package_status = "full"
      }
    } else if (location_x === 4) {
      isVerticalLine = false;
      location_x = 4;
      package_status = "empty"
      movemont_status = "stoped"
    }
    
    if(!isVerticalLine && location_x === 4  && movemont_status === "stoped"){

      doorStatus = "open";
      doorPackage = "full";
      // robot
      package_status = "empty"

      const update_door = 
      { id: 1,
      status: doorStatus,
      package: doorPackage,
      drone_in:true,
      drone_id:'drone_A12',
      drone_power_status:'on',
      drone_package_status:'empty',
      };
  
      let newDoorData = doorData?.map((item) => {
        if (item.id === update_door.id) {
          item = update_door
        }
        return item
      });
  
      
    setTimeout(function () {
      setDoorData(newDoorData)
      // console.log(newDoorData)
    }, 1000);

    }




    const robot = {
      id: 1,
      location_x: location_x,
      location_y: "A",
      location_vertical: isVerticalLine,
      name: "Robot_1",
      power_status: "ON",
      movemont_status: movemont_status,
      package_status: package_status,
    };

    // delete product aisle info
    // const updatedData = products.filter(item => item.id !== 1);
    // setProductData(updatedData);

    

    let newRobotData = robotData?.map((item) => {
      if (item.id === robot.id) {
        item = robot;
      }
      return item
    });

    setTimeout(function () {
      console.log(newRobotData);
      setRobotData(newRobotData);
      
    }, 1000);
  };

  const handleResetPosition = () => {
    setRobotData(robots);
    location_x=0;
    isVerticalLine=true;
    setProductsData(products)
    setDoorData(doorInfo)
  };

  useEffect(() => {
    if (true) {
      setTimeout(function () {
        // setRobotData(robotData)
      }, 1000);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-start-1 col-end-3">
          <Heading tag="h3" className="pb-4">
            Store aisles &lt;&gt; Robot &lt;&gt; Line &lt;&gt; pickup/unload
            Door
          </Heading>
        </div>
        <div className="col-end-10 col-span-6 h-8">
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
                                <div className={`h-20 w-4 border-gray-200 ${robot.package_status === "full" ? 
                              "bg-green-500 border-2": "border-4"}`} />
                              )}
                          </div>
                        ))}
                      </div>

                      <div
                        className={`border border-gray-400 h-20 w-20  text-lg text-center  justify-items-center justify-center`}
                      >
                        {`${y}${x}`}

                        {productsData.map((product, index) => (
                          <div key={index} className="bg-green-500">
                            {product.locatedIn === "aisle" && product.location_x === x && product.location_y === y && (
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
                                <div className={`h-4 w-20 border-gray-200 ${robot.package_status === "full" ? 
                                "bg-green-500 border-2": "border-4"}`} />
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
            </div></div>
            {/* justify-center justify-items-center */}
            <div className="border-2 border-gray-400 rounded-md p-2 m-1">
            <div className="text-green-500 text-xl font-bold text-center">
              controller test buttons
            </div>
            <div className="grid grid-cols-3 gap-1 w-80 border border-gray-400 my-1 p-1">
              <div><button className="bg-sky-400 w-24 h-6  rounded-md ">1 x up</button></div>
              <div><button className="bg-sky-400 w-24 h-6 rounded-md ">1 x down</button></div>
              <div><button className="bg-sky-400 w-24 h-6 rounded-md ">1 x up</button></div>
              <div><button className="bg-sky-400 w-24 h-6 rounded-md ">1 x up</button></div>
            </div>
              </div>


        </div>
      </div>
    </>
  );
};

export default StoreRobot;
