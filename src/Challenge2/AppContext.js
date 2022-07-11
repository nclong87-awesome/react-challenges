import React from 'react';

const AppContext = React.createContext({});
AppContext.displayName = 'AppContext';

export const useAppContext = () => React.useContext(AppContext);

export default AppContext;
