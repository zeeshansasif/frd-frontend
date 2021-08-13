import React from 'react';
import MainLayout from './Layout/MainLayout'
import { BrowserRouter, useHistory } from 'react-router-dom';
import Routes from './routes'

const App = () => {
  const history = useHistory()
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
