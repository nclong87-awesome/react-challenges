import React, { Suspense } from 'react';
import './App.css';
import Challenge from './Challenge1';

function App() {
  return (
    <Suspense
        fallback={
          <div className="App">
            Loading...
          </div>
        }
      >
      <div className="App">
        <Challenge />
      </div>
  </Suspense>
  );
}

export default App;
