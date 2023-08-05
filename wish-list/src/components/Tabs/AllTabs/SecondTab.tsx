// SecondTab.tsx

import React from "react";
import './AllTabs.css';
import Card from "../../Cards/Card";
import { BriefcaseIcon, StopCircleIcon, SpeakerWaveIcon, MoonIcon, HomeIcon, MapIcon } from "@heroicons/react/24/solid";

const SecondTab = () => {
  return (
    <div className="SecondTab">
      <div className="cards">
        <Card
          body="Build your own bedding bundle"
          title="Linen Bedding" 
          indicator="$488"
          subtitle="Bed Threads"
          image="/LinenBedding.jpg"
          badge={{
            text: "Low Priority",
            filled: false
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://bedthreads.com/products/the-bed-threads-build-your-own-bundle",
            filled: true,
            icon: <MoonIcon />
          }}
        />
        <Card
          body="Damascus Carbon Steel"
          title="Japanese Knife" 
          indicator="$188"
          subtitle="Santoku"
          image="/Knife.jpg"
          badge={{
            text: "Low Priority",
            filled: false
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://knifewear.com/products/hatsukokoro-kumokage-aogami-kurouchi-damascus-bunka-180mm?variant=41675655839918",
            filled: true,
            icon: <HomeIcon />
          }}
        />
        <Card
          body="High Quality Suit Case I can use for the rest of my life"
          title="Floyd Check-In" 
          indicator="495 euros"
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
      </div>
      <div className="cards">
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
        <Card
          body="Herschel"
          title="Bowen Duffle Tech" 
          indicator="$150"
          subtitle="Black"
          image="/HerschelDuffle.jpg"
          badge={{
            text: "Low Priority",
            filled: false
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://herschel.com/shop/duffles/bowen-duffle-tech?exact=1&v=11293-00001-OS",
            filled: true,
            icon: <MapIcon />
          }}
        />
        <Card
          body=""
          title="AirPods Max" 
          indicator="$549"
          subtitle="Space Gray"
          image="/AirpodMax.png"
          badge={{
            text: "Low Priority",
            filled: false
          }}
          btn={{
            text: "Link",
            type: "primary",
            href: "https://www.apple.com/shop/buy-airpods/airpods-max/space-gray",
            filled: true,
            icon: <SpeakerWaveIcon />
          }}
        />
      </div>
    </div>
  );
};

export default SecondTab;