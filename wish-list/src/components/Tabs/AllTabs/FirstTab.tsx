// FirstTab.tsx

import React from "react";
import './AllTabs.css';
import Card from "../../Cards/Card";
import { BugAntIcon, ShoppingCartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";


const FirstTab = () => {
  return (
    <div className="FirstTab">
      <p className="header">Birthday List</p>
      <div className="cards">
        <Card
          title="Playstation 5"
          subtitle="Spider-Man Edition"
          body="Pre-order starts on July 28 and is expected to sell out quickly"
          indicator="$499"
          image="/spiderman_ps5.jpg"
          badge={{
            text: "Low Priority",
            filled: false
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://blog.playstation.com/2023/07/20/first-look-ps5-console-marvels-spider-man-2-limited-edition-bundle/",
            filled: true,
            icon: <BugAntIcon />
          }}
        />
        <Card
          title="Dr. Martens"
          subtitle="Adrian Tassle Loafer Size 9"
          body="Not sure what color I want yet"
          indicator="$150-$170"
          image="/DrMartens.jpg"
          badge={{
            text: "Low Priority",
            filled: false
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://www.drmartens.com/us/en/filtered/mens/shoes/c/02020000?dmsubstyle=loafers",
            filled: true,
            icon: <ShoppingCartIcon />
          }}
        />
        <Card
          title="ALD Taverna Loafers"
          subtitle="Black Size 9"
          body=""
          indicator="$255"
          image="/ALDTaverna.jpg"
          badge={{
            text: "Low Priority",
            filled: false
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://www.aimeleondore.com/products/ald-taverna-loafers-3",
            filled: true,
            icon: <ShoppingBagIcon />
          }}
        />
      </div>
      {/* First tab content will go here */}
    </div>
  );
};

export default FirstTab;