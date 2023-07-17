import React from 'react';
import './App.css';
import MyTabs from './components/Tabs/Tabs';
import Tabs from './components/Tab/Tab';

function App() {
  return (
    <div className="App">
      <header className="App-header">Wish List</header>
      <MyTabs />
      <Tabs />
    </div>
  );
}

export default App;
