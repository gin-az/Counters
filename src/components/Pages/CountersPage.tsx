import React, {FC, useState} from 'react';
import {CounterForm} from "../CounterForm";
import {ICounter} from "../../interfaces";
import {CounterList} from "../CounterList";

declare var confirm: (question: string) => boolean;

export const CountersPage: FC = () => {
  const [counters, setCounters] = useState<ICounter[]>([]);
  const totalCount = (counters.reduce((acc, num) => acc + num.value, 0));

    const addCounter = ():void => {
      const newCount: ICounter = {
        value: totalCount ?? 0,
        id: Date.now(),
      }
      setCounters(prev => [...prev, newCount]);
    }

  const incCounterEverySec = () => {
    let k = 0;
    setCounters(counters.map(counter => {
      k++;
      if (k % 4 === 0) counter.value++;
      return counter;
    }))
  }

  const removeCounter = (id: number) => {
    const isOkRemove = confirm('Вы уверены, что хотите удалить элемент?');
    isOkRemove && setCounters(prev =>
      prev.filter(counter => counter.id !== id))
  }

  const incrementCounter = (id: number) => {
    setCounters(counters.map(counter => {
      if (counter.id === id) counter.value++;
        return counter;
    }))
  }

  const decrementCounter = (id: number) => {
    setCounters(counters.map(counter => {
      if (counter.id === id) counter.value--;
      return counter;
    }))
  }

  console.log('counters', counters)

  return (
    <>
      <CounterForm onAddCounter={addCounter} />
        <CounterList
          counters={counters}
          incCounterEverySec={incCounterEverySec}
          onRemoveCounter={removeCounter}
          onIncrementCounter={incrementCounter}
          onDecrementCounter={decrementCounter}
        />
    </>
  );
};
