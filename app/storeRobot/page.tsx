import Heading from "@/components/Heading";
import DroneIcon from "@/components/icons/DroneIcon";
import React from "react";

const StoreRobot = () => {
  
  const dataX = [1, 2, 3, 4];
  const dataY = ["A", "B", "C", "D"];

  return (
    <>
      <Heading tag="h3" className="pb-4">
        Store aisles &lt;&gt; Robot &lt;&gt; Line &lt;&gt; pickup/unload Door
      </Heading>
      <div className="w-full rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <div className="flex flex-row m-1 p-1">
          {/* Aisels | Lines | Robot | door */}

          <div className="border-2 justify-center border-gray-400 justify-items-center rounded-md p-2 m-1">
            <div className="text-green-500 text-xl font-bold text-center">
              Aisles
            </div>
            <div className="grid grid-cols-4 gap-0 border-2 border-sky-400 m-1 p-1">
              {dataY.map((y, index) => (
                <div key={index} className="">
                  {dataX.map((x, index) => (
                    <div
                      key={index}
                      className="grid grid-rows-1 grid-flow-col gap-0 "
                    >
                      <div
                        className={`row-span-3 border border-blue-400 h-20 w-2 m-0 p-0 `}
                      />

                      <div
                        className={`border border-gray-400 h-20 w-20  text-lg text-center  justify-items-center justify-center ${
                          y === "A" && x === 1 ? "bg-green-700 border-2" : ""
                        }`}
                      >
                        {`${y}${x}`}
                        <div className="text-sm">product</div>
                        <div className="text-xs">name</div>
                      </div>
                      <div
                        className={`row-span-2 col-span-2 border border-green-500 h-2 w-20 m-0 p-0 ${x===4 && y==="A" ? "bg-white" : "" }`}
                      />
                    </div>
                  ))}
                </div>
              ))}
              {dataX.map((item, index) => (
                <div className="grid grid-cols-1 border-4 border-green-500 h-20 w-20 ml-2 justify-items-center justify-center">
                  <div className={`text-sm text-center `}>{`Door_${item}`}</div>
                  <div>
                    <DroneIcon
                      width={28}
                      height={28}
                      color="green"
                      strokeWidth="2"
                    />
                  </div>
                  <div className="text-xs">closed</div>
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
                {dataX.map((item, index) => (
                  <div key={index} className="flex flex-col gap-1 border border-gray-500 p-1 items-center justify-between">
                    <div className="text-sm text-center">Robot_{item}</div>
                    <button className="rounded-md bg-red-600 text-sm w-12">OFF</button>
                    <button className="rounded-md bg-yellow-500 text-gray-800 text-sm px-1">Stoped</button>
                    <button className="rounded-md bg-yellow-700 text-sm px-1">in: A2</button>
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
