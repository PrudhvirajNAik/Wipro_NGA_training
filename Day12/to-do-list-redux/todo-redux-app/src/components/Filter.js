import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/todoSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="btn-group mt-3" role="group">
      <button className="btn btn-secondary" onClick={() => dispatch(setFilter('All'))}>
        All
      </button>
      <button className="btn btn-success" onClick={() => dispatch(setFilter('Completed'))}>
        Completed
      </button>
      <button className="btn btn-warning" onClick={() => dispatch(setFilter('Pending'))}>
        Pending
      </button>
    </div>
  );
};

export default Filter;
