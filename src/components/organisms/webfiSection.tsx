import { webfiPaths } from "../../data/assetGroups";
import ExternalLink from "../atoms/externalLink";
import AssetGroup from "../molecules/assetGroup";

const WebfiSection = () => {
  return (
    <section
      id="webfi"
      className="w-full flex flex-col justify-between bg-background-dark scroll-mt-9"
    >
      <div className="flex flex-row">
        <div className="flex-[2] rounded-tr-2xl rounded-br-2xl overflow-hidden">
          {/* add autoplay and loop */}
          <video width="100%" muted autoPlay loop>
            <source src="webfi/electroscape1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex-1">
          <div className="mx-10">
            <h1 className="text-[2em]">WEBFI // 2023</h1>
            <p className="text-[1.2em] font-light leading-[1.1em] max-w-[100ch] mb-3">
              webFi is built to help small to medium sized musicians reach their audience. Developed a waitlist with hundreds of Atlanta based musicians with a closed beta that hosted roughly 2-5 tracks per user. webFi's ELECTROSCAPE event series brought out the city of Atlanta throughout mid-late 2023, selling out consistently with a focus on showcasing the artists on our platform. webFi was evalutaed at $250,000 at the time of exiting in November 2023.
            </p>
            <ExternalLink title="EXPLORE ->" href="https://www.webfi.io/" />
          </div>
        </div>
      </div>
      <div className="p-8">
        <AssetGroup paths={webfiPaths} />
      </div>
    </section>
  );
};

export default WebfiSection;
