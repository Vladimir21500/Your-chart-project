import React, { useState } from 'react';
import CustomChart from '../customChart/CustomChart.jsx';
import './statistics.scss';

const Statistics = () => {
  const [labels, setLabels] = useState('');
  const [values, setValues] = useState('');
  const [typeChart, setTypeChart] = useState('bar');
  const [isEmptyLabels, setIsEmptyLabels] = useState(false);
  const [isEmptyValues, setIsEmptyValues] = useState(false);

  const onChangeLabels = (event) => {
    setLabels(event.target.value);
    setIsEmptyLabels(event.target.value === '');
  };

  const onChangeValues = (event) => {
    setValues(event.target.value);
    setIsEmptyValues(event.target.value === '');
  };

  const onToggleType = (event) => {
    setIsEmptyLabels(labels === '');
    setIsEmptyValues(values === '');
    if (!labels || !values) {
      return null;
    }
    setTypeChart(event.target.value);
  };

  return (
    <>
      <div className='statistics__chart-data'>
        <label className='statistics__label'>
          X axis labels:
          <input
            placeholder='Label1, Label2, Label3'
            onChange={onChangeLabels}
            type='text'
            name='labels'
            value={labels}
            required
          />
          {isEmptyLabels && (
            <span className='statistics__required'>Enter labels for chart</span>
          )}
        </label>

        <label className='statistics__label'>
          Y axis values:
          <input
            placeholder='Value1, Value2, Value3'
            onChange={onChangeValues}
            type='text'
            name='values'
            value={values}
            required
          />
          {isEmptyValues && (
            <span className='statistics__required'>Enter values for chart</span>
          )}
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
