import NavLink from "../atoms/navLink";

type NavLinkGroupProps = {
  links: LinkProps[];
  className?: string;
};

const NavLinkGroup = ({ links, className }: NavLinkGroupProps) => {
  return (
    <ul className={`flex flex-col justify-between ${className}`}>
      {links.map((link) => (
        <li className="w-full mb-2">
          <NavLink {...link} />
        </li>
      ))}
    </ul>
  );
};

export default NavLinkGroup;
