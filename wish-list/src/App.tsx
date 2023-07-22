import React from 'react';
import './App.css';
import TabComponent from './components/Tabs/TabComponent';
import Badge from './components/Cards/Badge';
import Button from './components/Cards/Button';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Card from './components/Cards/Card';

function App() {
  return (
    <div className="App">
      <TabComponent />
      <section className="card-container">
        {/*
        <Badge text="Badge" filled={false}/>
        <Button text="Link" type="primary" href="#" filled={true} icon={<BeakerIcon />}/>
        */}
        {/*
        <Card 
          body="body"
          title="title" 
          indicator="indicator"
          subtitle="subtitle"
          image="http://source.unsplash.com/random"
          badge={{
            text: "Badge",
            filled: false
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "#",
            filled: true,
            icon: <BeakerIcon />
          }}
        />
        */}
        </section>
    </div>
  );
}

export default App;
