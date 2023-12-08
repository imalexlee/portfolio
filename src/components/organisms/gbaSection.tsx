import { gbaPaths } from "../../data/assetGroups";
import ExternalLink from "../atoms/externalLink";
import AssetGroup from "../molecules/assetGroup";

const GbaSection = () => {
  return (
    <section
      id="gba"
      className="w-full flex flex-col justify-between bg-background-dark scroll-mt-9"
    >
      <div className="flex flex-row">
        <div className="flex-[2] rounded-tr-2xl rounded-br-2xl overflow-hidden aspect-video">
          {/* add autoplay and loop */}
          <img
            src="gba/grandmasFlowers.png"
            alt="landing screen of Grandmas Flowers game."
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1">
          <div className="mx-10">
            <h1 className="text-[2em]">GBA // 2023</h1>
            <p className="text-[1.2em] font-light leading-[1.1em] max-w-[100ch] mb-3">
              Created 4 video games on the Game Boy Advance using the C programming language. Each game ranged between 2 weeks to 2 months of development time, including a story based horror game, a platformer, a Rally-X clone, and a high-pressure collector game. Each game utilized low-level hardware features such as DMA, audio manipulation, and user-input based CPU interrupts. Available on my GitHub
            </p>
            <ExternalLink
              title="EXPLORE ->"
              href="https://github.com/imalexlee"
            />
          </div>
        </div>
      </div>
      <div className="p-8">
        <AssetGroup paths={gbaPaths} />
      </div>
    </section>
  );
};

export default GbaSection;
