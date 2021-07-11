import { STORE_RESTAURANTS } from "./actionTypes";

export type Restaurant = {
  id: number;
  name: string
}

export type Action = {type: typeof STORE_RESTAURANTS, records: Restaurant[]}
