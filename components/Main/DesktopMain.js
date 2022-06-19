import React from "react";

// Next Imports
import Image from "next/image";

// component Imports
import DatabizLogoSVG from "../SVG/logos/DatabizLogoSVG";
import AudiophileLogoSVG from "../SVG/logos/AudiophileLogoSVG";
import MeetLogoSVG from "../SVG/logos/MeetLogoSVG";
import MakerLogoSVG from "../SVG/logos/MakerLogoSVG";

// Image Imports
import heroImageDesktop from "../../public/images/image-hero-desktop.png";

const DesktopMain = () => {
  return (
    <div>
      <main className="flex gap-20 lg:gap-32 px-5">
        <section className="flex flex-col gap-8 lg:gap-12 md:pt-28 lg:pt-44">
          <h1 className="font-bold md:text-5xl lg:text-[80px] lg:leading-[80px]">
            Make remote work
          </h1>
          <p className="text-lg text-gray-500">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <a href="#">Learn more</a>

          <ul className="flex">
            <li>
              <DatabizLogoSVG />
            </li>
            <li>
              <AudiophileLogoSVG />
            </li>
            <li>
              <MeetLogoSVG />
            </li>
            <li>
              <MakerLogoSVG />
            </li>
          </ul>
        </section>
        <section className="">
          <Image src={heroImageDesktop} alt="man using laptop" />
        </section>
      </main>
    </div>
  );
};

export default DesktopMain;
