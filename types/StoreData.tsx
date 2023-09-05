

export interface GovernerDataType {
    id: number;
    info: String;
    robot: RobotDataType[];
    doors : DoorDataType[];
    Aisles: AislesDataType;
}

export interface DoorDataType {
    id: number;
    status: string;
    package: string;
    drone_in:boolean;
    drone_id:string;
    drone_power_status:string;
    drone_package_status:string;
}

export interface RobotDataType { 
    id: number;
    name: string;
    power_status:string;
    movemont_status:string;
    package_status:string;
    location_x : number;
    location_y : string;
    location_vertical: boolean | true;
   
}

export interface AislesDataType {
    id:number,
    store_id:string;
    string_name:string,
    aisle_x:number[];
    aisle_y:string[];
    doors:number;
    
} 

export interface ProductDataType {
    id: number;
    name: string;
    locatedIn:string;
    location_y: string;
    location_x: number;
}
