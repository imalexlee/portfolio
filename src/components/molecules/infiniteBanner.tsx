//@ts-ignore
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";
import { tickerHeadings } from "../../data/tickerHeadings";

const InfiniteBanner = () => {
  return (
    <div className="mt-1 absolute w-screen">
      <HorizontalTicker duration={50000}>
        {tickerHeadings.map((heading, index) => (
          <div key={index} className=" mx-4 text-xs  whitespace-nowrap">
            {heading}
          </div>
        ))}
      </HorizontalTicker>
      <div className="bg-[#949494] h-[1px] w-full mt-1"></div>
    </div>
  );
};

export default InfiniteBanner;
