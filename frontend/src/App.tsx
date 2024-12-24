import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router';
import ApplicationRoutes from './ApplicationRoutes';

function App() {
  return (
      <BrowserRouter>
          <main>
              <ApplicationRoutes/>
          </main>
      </BrowserRouter>
  );
}

export default App;
