import InfiniteBanner from "../molecules/infiniteBanner";

const Hero = () => {
  return (
    <section className="h-screen w-full bg-background-dark">
      <InfiniteBanner />

      <div
        id="inner-container"
        className="p-8 flex flex-col relative w-full h-full justify-between"
      >
        <div className="flex flex-row justify-between self-end w-full mt-2">
          <h1 className=" text-xs font-medium">ALEX LEE</h1>
          <h1>👽</h1>
        </div>
        <div
          id="text-container"
          className=" flex flex-col items-center md:text-[vmin] text-[8vmin] leading-[.9em] text-center  my-auto"
        >
          <h3 className="max-w-[25ch] mb-[1px]">
            <span className="font-bold">SOFTWARE</span>
            <br /> <span> CREATOR</span> FOCUSED ON PEOPLE <br /> PROBLEMS //
            FRONT - BACK - <br /> EMBEDDED - ARCHITECTURE
          </h3>
          <p className="text-[10px] leading-[1.4em] max-w-[100ch] mb-[1px]">
            WANT TO DISCUSS? REACH OUT AT THE EMAIL BELOW. I WILL DISCUSS WITH
            ANYONE SERIOUS ABOUT THEIR PROJECT
          </p>

          <p className="max-w-[25ch]">ATLANTA, GA</p>
        </div>
        {/* <div className="flex flex-row justify-between self-end w-full">
          <LinkGroup links={heroBottomLeftLinks} className="self-end" />
          <LinkGroup links={heroBottomRightLinks} className=" text-right" />
        </div> */}
        <h1 className="self-end text-sm">©2023</h1>
      </div>
    </section>
  );
};

export default Hero;
