export interface ICounter {
  id: number,
  value: number,
};

export interface ICountersState {
  counters: ICounter[]
};

export type CounterAction = {
  type: string,
  payload: number | null
};