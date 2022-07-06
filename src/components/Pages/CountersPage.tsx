import React, { FC } from 'react';
import { CounterForm } from "../CounterForm";
import { ICounter, ICountersState } from "../../interfaces";
import { CounterList} from "../CounterList";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_COUNTER,
  INCREMENT_COUNTER,
  REMOVE_COUNTER
} from "../../store/actions";

declare var confirm: (question: string) => boolean;

export const CountersPage: FC = () => {
  const counters: ICounter[] = useSelector((state: ICountersState) => state?.counters);
  const totalCount = (counters.reduce((acc, num) => acc + num.value, 0));
  const dispatch = useDispatch();

  const delCounter = (count: number) => dispatch({
    type: REMOVE_COUNTER,
    payload: count ?? 0
  });

  const addCounter = () => dispatch({
    type: ADD_COUNTER,
    payload: totalCount
  });

  const incCounterEverySec = () => {
    let k = 0;
    counters.map(counter => {
      k++;
      if (k % 4 === 0)
        dispatch({
          type: INCREMENT_COUNTER,
          payload: counter.id
        });
    });
  };

  const removeCounter = (id: number) => {
    const isOkRemove = confirm('Вы уверены, что хотите удалить элемент?');
    isOkRemove && delCounter(id);
  }

  return (
    <>
      <CounterForm onAddCounter={addCounter} />
        <CounterList
          incCounterEverySec={incCounterEverySec}
          onRemoveCounter={removeCounter}
        />
    </>
  );
};
