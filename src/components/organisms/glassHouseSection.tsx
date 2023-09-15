import AssetGroup from "../molecules/assetGroup";
import { glassHousePaths } from "../../data/assetGroups";
import ExternalLink from "../atoms/externalLink";

const GlassHouseSection = () => {
  return (
    <section
      id="glasshouse"
      className="w-full flex flex-col justify-between bg-background-dark scroll-mt-9"
    >
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="mx-10">
            <h1 className="text-[2em]">GLASSHOUSE // 2023</h1>
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
              href="https://glasshousegallery.netlify.app/"
            />
          </div>
        </div>
        <div className="flex-[2] bg-[#D8D9CF]  rounded-tl-2xl items-center justify-center rounded-bl-2xl overflow-hidden aspect-video">
          <div className="flex flex-row items-center justify-center h-full mx-[4em]">
            <div className="flex flex-col text-black ">
              <div className="flex-col flex text-[#2B2B29] text-[11vmin] font-medium  leading-[1em]">
                <h1>GLASS</h1>
                <h1>HOUSE</h1>
              </div>
              <span className="text-[2.5vmin] text-[#565753]">
                EVOLVING DIGITAL GALLERY
              </span>
            </div>
            <div className="">
              <img src="glasshouse/glassHouseGif.gif" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <AssetGroup paths={glassHousePaths} />
      </div>
    </section>
  );
};

export default GlassHouseSection;
