const NavLink = ({
  href,
  title,
  rightElement,
  target = "_self",
}: LinkProps) => {
  return (
    <div className="w-full h-fit flex flex-col justify-between">
      <a
        href={href}
        target={target}
        className=" w-full h-[2em] flex justify-between hover:opacity-50"
      >
        <h1>{title}</h1>
        <div>{rightElement}</div>
      </a>
      <div className="h-[1px] bg-[#949494]"></div>
    </div>
  );
};

export default NavLink;
