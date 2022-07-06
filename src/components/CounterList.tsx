import React, { useEffect } from 'react';
import { ICounter, ICountersState } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../store/actions";

type ITodoListProps = {
  onRemoveCounter: (id: number) => void;
  incCounterEverySec(): void;
};

export const CounterList: React.FC<ITodoListProps> = ({ onRemoveCounter, incCounterEverySec }) => {
  const dispatch = useDispatch();
  const counters: ICounter[] = useSelector((state: ICountersState) => state?.counters);

  const incCounter = (count: number) => dispatch({
    type: INCREMENT_COUNTER,
    payload: count ?? 0
  });

  const decCounter = (count: number) => dispatch({
    type: DECREMENT_COUNTER,
    payload: count ?? 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      incCounterEverySec();
    }, 1000);
    return () => clearInterval(interval);
  }, [counters]);

  let k = 0;

  return (
    <>
      <ul>
        {counters.map(counter => {
          k++
          return (
            <li key={counter.id} className="todo">
              <label>
                {
                  (k % 4 !== 0) &&
                  <a className="btn-floating btn-small waves-effect waves-light">
                    <i className="material-icons" onClick={() => decCounter(counter.id)}>remove</i>
                  </a>
                }
                <h4>{counter.value}</h4>
                {
                  (k % 4 !== 0) &&
                  <a className="btn-floating btn-small waves-effect waves-light">
                    <i className="material-icons" onClick={() => incCounter(counter.id)}>add</i>
                  </a>
                }
                <a className="btn-floating btn-small waves-effect waves-light red" style={{marginLeft: '1rem'}}>
                  <i className="material-icons" onClick={() => onRemoveCounter(counter.id)}>delete</i>
                </a>
              </label>
            </li>
          )
        })}
      </ul>
    </>
  );
};
