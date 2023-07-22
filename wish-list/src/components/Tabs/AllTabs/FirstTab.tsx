// FirstTab.js

import React from "react";
import './AllTabs.css';
import Card from "../../Cards/Card";
import { BeakerIcon } from "@heroicons/react/24/solid";


const FirstTab = () => {
  return (
    <div className="FirstTab">
      <p>Birthday List</p>
      
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
      {/* First tab content will go here */}
    </div>
  );
};

export default FirstTab;