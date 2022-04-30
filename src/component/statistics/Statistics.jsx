import React, { useState } from 'react';
import CustomChart from '../customChart/CustomChart.jsx';
import './statistics.scss';

const Statistics = () => {
  const [labels, setLabels] = useState('');
  const [values, setValues] = useState('');
  const [typeChart, setTypeChart] = useState('bar');

  const onToggleType = (event) => {
    setTypeChart(event.target.value);
  };

  return (
    <>
      <div className='statistics__chart-data'>
        <label className='statistics__label'>
          X axis labels:
          <input
            onChange={(event) => setLabels(event.target.value)}
            type='text'
            value={labels}
          />
        </label>

        <label className='statistics__label'>
          Y axis values:
          <input
            onChange={(event) => setValues(event.target.value)}
            type='text'
            value={values}
          />
        </label>
      </div>

      <div className='statistics__chart'>
        <CustomChart labels={labels} values={values} typeChart={typeChart} />
      </div>

      <div className='statistics__types'>
        <div className='statistics__types-column'>
          <input
            id='typeBar'
            onChange={onToggleType}
            type='radio'
            value='bar'
            name='type-chart'
            checked={typeChart === 'bar'}
          />
          <label htmlFor='typeBar'>Bar Chart</label>
          <input
            id='typeLine'
            onChange={onToggleType}
            type='radio'
            value='line'
            name='type-chart'
            checked={typeChart === 'line'}
          />
          <label htmlFor='typeLine'>Line Chart</label>
        </div>

        <div className='statistics__types-column'>
          <input
            id='typePie'
            onChange={onToggleType}
            type='radio'
            value='pie'
            name='type-chart'
            checked={typeChart === 'pie'}
          />
          <label htmlFor='typePie'>Pie Chart</label>
          <input
            id='typeRadar'
            onChange={onToggleType}
            type='radio'
            value='radar'
            name='type-chart'
            checked={typeChart === 'radar'}
          />
          <label htmlFor='typeRadar'>Radar Chart</label>
        </div>
      </div>
    </>
  );
};

export default Statistics;
