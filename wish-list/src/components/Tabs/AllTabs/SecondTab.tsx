// SecondTab.tsx

import React from "react";
import './AllTabs.css';
import Card from "../../Cards/Card";
import { BriefcaseIcon, StopCircleIcon } from "@heroicons/react/24/solid";

const SecondTab = () => {
  return (
    <div className="SecondTab">
      <p className="header">Christmas List</p>
      {/* Second  tab content will go here */}
      <div className="cards">
        <Card
          body="High Quality Suit Case I can use for the rest of my life"
          title="Floyd Check-In" 
          indicator="595 euros"
          subtitle="Pacific Blue"
          image="/FloydLuggage.jpg"
          badge={{
            text: "Low Priority",
            filled: false
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://floyd.one/collections/floyd-travel-cases/products/floyd-check-in?variant=45012081115448",
            filled: true,
            icon: <BriefcaseIcon />
          }}
        />
        <Card
          body="Green wheels for the suit case so that it can match my style"
          title="Floyd Wheel Set" 
          indicator="55 euros"
          subtitle="Racing Green"
          image="/FloydWheels.jpg"
          badge={{
            text: "Low Priority",
            filled: false
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://floyd.one/collections/floyd-wheel-sets/products/floyd-wheel-set?variant=45012081606968",
            filled: true,
            icon: <StopCircleIcon />
          }}
        />
      </div>
    </div>
  );
};

export default SecondTab;