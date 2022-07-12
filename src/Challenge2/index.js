import React, { useState } from 'react';
import Content from './Content';
import AppContext from './AppContext';
import CounterContext from './CounterContext';
import AppNameInputField from './AppNameInputField';
import ComplexComponent from './ComplexComponent';

const Challenge = () => {
  const [count, setCount] = useState(0);
  const [appName, setAppName] = useState('Example 2');

  const onClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onChangeAppName = (event) => {
    setAppName(event.target.value)
  };

  const appContextValues = { appName };
  const counterContextValues = { count };

  return (
    <AppContext.Provider value={appContextValues}>
      <CounterContext.Provider value={counterContextValues}>
        <div className="example">
          <h1>Challenge 2</h1>
          <AppNameInputField defaultValue={appName} onChange={onChangeAppName} />
          <button onClick={onClick}>Increase count</button>
          <Content />
          <ComplexComponent style={{ width: '100%', position: 'relative', backgroundColor: 'aquamarine', padding: 10 }} />
        </div>
      </CounterContext.Provider>
    </AppContext.Provider>
  )
}

export default Challenge;
