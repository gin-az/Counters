import React from 'react';

interface ITodoFormProps {
  onAddCounter(value: number): void;
};

export const CounterForm: React.FC<ITodoFormProps> = props => {

  return (
    <div className="input-field mt2">
      <a
        className="waves-effect waves-light btn"
        onClick={() => props.onAddCounter(0)}>
          Добавить счетчик
      </a>
    </div>
  );
};
