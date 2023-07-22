// ThirdTab.js

import React from "react";
import './AllTabs.css';
import Card from "../../Cards/Card";
import { BeakerIcon } from "@heroicons/react/24/solid";

const ThirdTab = () => {
  return (
    <div className="ThirdTab">
      <p>Graduation List</p>
      {/* third  tab content will go here */}
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
    </div>
  );
};

export default ThirdTab;