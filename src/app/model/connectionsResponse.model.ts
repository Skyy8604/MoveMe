import {StationPoint} from "./station.model";

export interface ConnectionsResponseModel {
  connections: Connection[],
  count: number,
  description: string,
  eof: number,
  max_duration: number,
  maxtime: number,
  min_duration: number,
  points: StationPoint[],
  rawtime: number,
  request: string,
  url: string,
  messages: string[]

}

export interface Connection {
  id: number,
  arrival: string,
  departure: string,
  duration: number,
  from: string,
  is_main: boolean,
  legs: Leg[],
  to: string
}

export interface Leg {
  '*G': string,
  '*L': string,
  '*Z': string,
  arrival: string,
  bgcolor: string,
  departure: string,
  exit: Exit,
  fgcolor: string,
  lat: number,
  line: string,
  lon: number,
  name: string,
  operator: string,
  runningtime: number,
  sbb_name: string,
  stopid: string,
  stops: Stop[],
  terminal: string,
  track: string,
  tripid: string,
  type: string,
  type_name: string,
  waittime: number,
  x: number,
  y: number

}

export interface Exit {
  arrival: string,
  lat: number,
  lon: number,
  name: string,
  sbb_name: string,
  stopid: string,
  x: number,
  y: number
}

export interface Stop {
  arrival: string,
  departure: string,
  lat: number,
  lon: number,
  name: string,
  stopid: string,
  x: number,
  y: number
}
