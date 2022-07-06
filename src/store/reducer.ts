import {CounterAction, ICounter, ICountersState} from "../interfaces";
import {ADD_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER, REMOVE_COUNTER} from "./actions";

const initialState: ICountersState = {
  counters: [
    {
      id: Date.now(),
      value: 0,
    }
  ],
};

export const rootReducer = (state: ICountersState = initialState, action: CounterAction): ICountersState => {
  switch (action.type) {
    case ADD_COUNTER: {
      const newCounter: ICounter = {
        id: Date.now(),
        value: action.payload ?? 0
      };
      return {
        ...state,
        counters: state.counters.concat(newCounter),
      };
    };

    case INCREMENT_COUNTER: {
      const newCounter = state.counters.map(counter => {
        if (counter.id === action.payload) return {...counter, value: counter.value + 1};
        return counter;
      });

      return {...state, counters: newCounter};
    };

    case DECREMENT_COUNTER: {
      const newCounter = state.counters.map(counter => {
        if (counter.id === action.payload) return {...counter, value: counter.value - 1};
        return counter;
      });

      return {...state, counters: newCounter};
    };

    case REMOVE_COUNTER:
      return { counters: state.counters.filter(counter =>
          counter.id !== action.payload
        )};

    default: return state;

  };
  return state;
};