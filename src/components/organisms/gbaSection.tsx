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
            <p className="text-[1em] font-light leading-[1.1em] max-w-[100ch] mb-3">
              THESE ARE SOME OF THE MAJOR WORKS I'VE AUTHORED OR PLAYED A HEAVY
              ROLE IN. THESE ARE SOME OF THE MAJOR WORKS I'VE AUTHORED OR PLAYED
              A HEAVY ROLE IN. THESE ARE SOME OF THE MAJOR WORKS I'VE AUTHORED
              OR PLAYED A HEAVY ROLE IN. THESE ARE SOME OF THE MAJOR WORKS I'VE
              AUTHORED OR PLAYED A HEAVY ROLE IN. THESE ARE SOME OF THE MAJOR
              WORKS I'VE AUTHORED OR PLAYED A HEAVY ROLE IN. THESE ARE SOME OF
              THE MAJOR WORKS I'VE AUTHORED OR PLAYED A HEAVY ROLE IN.
            </p>
            <ExternalLink
              title="EXPLORE ->"
              href="https://github.com/imalexlee?tab=repositories&q=&type=public&language=c&sort="
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
