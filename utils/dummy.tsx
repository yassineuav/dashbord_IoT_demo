export const products = [
    { id: 1, name: "CocaCola", locatedIn:"aisle", location_y: "D", location_x: 1 },
    // { id: 3, name: "abos", y: "C", x: 1 },
    // { id: 4, name: "iswn", y: "B", x: 4 },
    // { id: 4, name: "iswn", y: "D", x: 4 },
    // { id: 4, name: "iswn", y: "B", x: 1 ,inAisles:true, inRobot:false, inDoor:false,inDrone:false,Delivered:false},
  ];

export const robots = [
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

export const aislesData = {
    id: 1,
    store_id: "store_0001",
    string_name: "store 0001",
    aisle_x: [1, 2, 3, 4],
    aisle_y: ["A", "B", "C", "D"],
    doors: 4,
  };

 export const doorInfo = [
    { id: 1,
    status: 'close',
    package: 'empty',
    drone_in:true,
    drone_id:'drone_A12',
    drone_power_status:'off',
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
    drone_power_status:'off',
    drone_package_status:'empty',
    },
];


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


// controll robot
// moving - stoped - picking_up - droping_off
// moving:
//  - forward <rotate> back - left <turn> right
// mapping:
// - get aisle map
// - x [1...n]
// - y [A...Z]
// robot moving forward:
//  -- get location x
//  -- if destination x greater than current x 
//  --      move to the specific location x[n-1]
//  -- else : move to the specific location x[n+1]
//
//
// 
// 
// 
// 
