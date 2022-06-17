import React from "react";

// Next Imports
import Image from "next/image";

// component Imports
import DatabizLogoSVG from "../SVG/logos/DatabizLogoSVG";
import AudiophileLogoSVG from "../SVG/logos/AudiophileLogoSVG";
import MeetLogoSVG from "../SVG/logos/MeetLogoSVG";

// Image Imports
import heroImageDesktop from "../../public/images/image-hero-desktop.png";

const DesktopMain = () => {
  return (
    <div>
      <main className="flex flex-col gap-12">
        <section>
          <div>
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <a href="#">Learn more</a>
          </div>
          <ul>
            <li>
              <DatabizLogoSVG />
            </li>
            <li>
              <AudiophileLogoSVG />
            </li>
            <li>
              <MeetLogoSVG />
            </li>
          </ul>
        </section>
        <section className="order-first">
          <Image src={heroImageDesktop} alt="man using laptop" />
        </section>
      </main>
    </div>
  );
};

export default DesktopMain;
