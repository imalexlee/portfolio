import { NavLinks } from "../../data/links";
import NavLinkGroup from "../molecules/navLinkGroup";

const NavSection = () => {
  return (
    <section className=" w-full flex flex-col justify-between  bg-background-dark">
      <div
        id="inner-container"
        className="p-8 flex h-full flex-col justify-between text-[2vmin]"
      >
        <div className="flex flex-col">
          <div id="nav-header" className="flex flex-col mb-5">
            <h1 className="font-medium">MY WORK // PROJECTS</h1>
            <p className="text-[10px] leading-[1.4em] max-w-[100ch] mb-[1px]">
              THESE ARE SOME OF THE MAJOR WORKS I'VE AUTHORED OR PLAYED A HEAVY
              ROLE IN.
            </p>
          </div>
          <NavLinkGroup links={NavLinks} className="h-20" />
        </div>
        <h1 className=" self-end text-sm">SCROLL TO EXPLORE</h1>
      </div>
    </section>
  );
};

export default NavSection;
