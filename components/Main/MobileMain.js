import React from "react";

// Next Imports
import Image from "next/image";

// component Imports
import DatabizLogoSVG from "../SVG/logos/DatabizLogoSVG";
import AudiophileLogoSVG from "../SVG/logos/AudiophileLogoSVG";
import MeetLogoSVG from "../SVG/logos/MeetLogoSVG";
import MakerLogoSVG from "../SVG/logos/MakerLogoSVG";

// Image Imports
import heroImageMobile from "../../public/images/image-hero-mobile.png";

const MobileMain = () => {
  return (
    <main className="flex flex-col gap-12 text-center">
      <Image src={heroImageMobile} alt="man using laptop" />

      <div className="px-4">
        <h1 className="text-4xl tracking-[0.5px] font-bold mb-4">
          Make remote work
        </h1>
        <p className="mb-8 text-gray-500">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a
          href="#"
          className="tracking-[0.22px] text-gray-50 bg-black py-3 px-5 rounded-2xl font-bold">
          Learn more
        </a>
      </div>
      <ul className="flex justify-between px-4 gap-7">
        <li className="basis-1/4">
          <DatabizLogoSVG />
        </li>
        <li className="basis-1/4">
          <AudiophileLogoSVG />
        </li>
        <li className="basis-1/4">
          <MeetLogoSVG />
        </li>
        <li className="basis-1/4">
          <MakerLogoSVG />
        </li>
      </ul>
    </main>
  );
};

export default MobileMain;
