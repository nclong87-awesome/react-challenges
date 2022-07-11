import React from 'react';

const CounterContext = React.createContext({});
CounterContext.displayName = 'CounterContext';

export const useCounterContext = () => React.useContext(CounterContext);

export default CounterContext;
