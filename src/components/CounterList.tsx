import React, { useEffect, useState } from 'react';
import { ICounter } from "../interfaces";

type ITodoListProps = {
  counters: ICounter[]
  onRemoveCounter: (id: number) => void
  onIncrementCounter(id: number): void
  onDecrementCounter(id: number): void
  incCounterEverySec(): void
}

export const CounterList: React.FC<ITodoListProps> = ({
  counters,
  onRemoveCounter,
  onIncrementCounter,
  onDecrementCounter,
  incCounterEverySec }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      incCounterEverySec();
    }, 1000);
    return () => clearInterval(interval);
  }, [counters]);

  console.log('interval', seconds);

  const removeCounter = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemoveCounter(id);
  }

  const incrementCounter = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onIncrementCounter(id);
  }

  const decrementCounter = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onDecrementCounter(id);
  }

  let k = 0;

  return (
    <>
      <ul>
        {counters.map(counter => {
          k++
          return (
          <li key={counter.id} className="todo">
            <label>
              {(k % 4 !== 0) &&
                <a className="btn-floating btn-small waves-effect waves-light">
                  <i className="material-icons" onClick={event => decrementCounter(event, counter.id)}>remove</i>
                </a>}
              <h4>{counter.value}</h4>
              {(k % 4 !== 0) &&
                <a className="btn-floating btn-small waves-effect waves-light">
                  <i className="material-icons" onClick={event => incrementCounter(event, counter.id)}>add</i>
                </a>}
              <a className="btn-floating btn-small waves-effect waves-light red" style={{marginLeft: '1rem'}}>
              <i className="material-icons" onClick={event => removeCounter(event, counter.id)}>
                delete
              </i>
                </a>
            </label>
          </li>
        )})}
      </ul>
    </>
  );
};
