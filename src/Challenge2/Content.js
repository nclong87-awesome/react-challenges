import React from 'react';
import { useAppContext } from './AppContext';
import { useCounterContext } from './CounterContext';
import RenderCounter from '../commons/RenderCounter';

const AppNameInfo = () => {
  const { appName } = useAppContext();

  return (
    <div className="content">
      <b>AppNameInfo</b>
      <i>{appName}</i>
      <RenderCounter />
    </div>
  )
}

const CountInfo = () => {
  const { count } = useCounterContext();

  return (
    <div className="content">
      <b>CountInfo</b>
      <i>Count: {count}</i>
      <RenderCounter />
    </div>
  )
}

const Content = () => {
  return (
    <div className="container">
      <AppNameInfo />
      <CountInfo />
    </div>
  )
}

export default React.memo(Content);
