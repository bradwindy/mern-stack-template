import React from 'react';
import Header from '../Header/Header';

// eslint-disable-next-line react/prop-types
const App = ({ children }) => (
  <>
    <Header />

    <main className="p-4">
      {children}
    </main>
  </>
);

export default App;
