import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// import './requestIdleCallback'
// import './reactFiber'
// import './reactFiberTree'
import './removeDuplicateListNode'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
