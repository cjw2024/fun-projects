// FirstTab.tsx

import React from "react";
import './AllTabs.css';
import Card from "../../Cards/Card";
import { FaceSmileIcon, ShoppingCartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <p className="header">Birthday List</p>
      {/* First tab content will go here */}
      <div className="cards">
        <Card
          title="Lulu Undies"
          subtitle="Size L"
          body="Built to Move 7in and Always in Motion 7in"
          indicator="$28"
          image="/lulu.jpg"
          badge={{
            text: "High Priority",
            filled: true
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://shop.lululemon.com/c/men-underwear/_/N-8rv",
            filled: true,
            icon: <FaceSmileIcon />
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
      <div className="cards">
        <Card
          title="Airism T-Shirt"
          subtitle="Uniqlo U"
          body="Size XL, white and nuetrals"
          indicator="$19.90"
          image="/Uniqlo.jpg"
          badge={{
            text: "high Priority",
            filled: true
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://www.uniqlo.com/us/en/products/E455359-000/00?colorDisplayCode=00&sizeDisplayCode=006",
            filled: true,
            icon: <ShoppingBagIcon />
          }}
        />
      </div>
    </div>
  );
};

export default FirstTab;