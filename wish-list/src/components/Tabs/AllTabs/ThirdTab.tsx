// ThirdTab.tsx

import React from "react";
import './AllTabs.css';
import Card from "../../Cards/Card";
import { CpuChipIcon, GlobeEuropeAfricaIcon, PhotoIcon } from "@heroicons/react/24/solid";

const ThirdTab = () => {
  return (
    <div className="ThirdTab">
      <div className="cards">
        <Card
          body="12-core CPU, 19-core GPU, 16-core Neural Engine, 16GB unified memory, 1TB SSD storage"
          title="Mac Book Pro" 
          indicator="$2699"
          subtitle="16 in. M2 Pro Chip"
          image="/MacBookPro.jpg"
          badge={{
            text: "High Priority",
            filled: true
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-gray-apple-m2-pro-with-12-core-cpu-and-19-core-gpu-1tb",
            filled: true,
            icon: <CpuChipIcon />
          }}
        />
        <Card
          title="South Africa" 
          indicator=">$2000"
          subtitle="Plane Tickets"
          body="Flight to visit Angie's family and travel before I have to become a real adult"
          image="/SouthAfrica.jpg"
          badge={{
            text: "High Priority",
            filled: true
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://www.google.com/travel/flights?bih=753&biw=1536&rlz=1C1CHFX_enUS760US762&hl=en&source=flun&uitype=cuAR&gl=us&curr=USD&tfs=CAEQAhopEgoyMDIzLTA4LTA4ag0IAhIJL20vMDJfMjg2cgwIAhIIL20vMDF5ajIaKRIKMjAyMy0wOC0xMmoMCAISCC9tLzAxeWoycg0IAhIJL20vMDJfMjg2emhDalJJVW5vMFFWOUZSa2hWTlc5QlMxRk5VV2RDUnkwdExTMHRMUzB0TFMxNWJHTnZORUZCUVVGQlIxTTVXVGxuUW5BMmNqaEJFZ0V3R2dzSXpLOE1FQUlhQTFWVFJEZ0RjTXl2REE9PbIBBBgBIAE&sa=X&ved=2ahUKEwi06PnlraWAAxXDg4kEHXhUAMcQ3RkoAHoECA8QBQ",
            filled: true,
            icon: <GlobeEuropeAfricaIcon />
          }}
        />
        <Card
          title="Money for trip" 
          indicator="any $"
          subtitle="Europe"
          body="I want to travel before I grow up"
          image="/Europe.jpg"
          badge={{
            text: "High Priority",
            filled: true
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://www.google.com/search?q=Dollars+to+Euros&source=lmns&bih=753&biw=1536&rlz=1C1CHFX_enUS760US762&hl=en&sa=X&ved=2ahUKEwim18LSvqiAAxVhEGIAHRpqBLUQ0pQJKAB6BAgBEAI",
            filled: true,
            icon: <PhotoIcon />
          }}
        />
      </div>
    </div>
  );
};

export default ThirdTab;