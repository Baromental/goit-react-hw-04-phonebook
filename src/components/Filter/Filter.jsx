import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange} className={s.input} />
  </label>
);

export default Filter;
