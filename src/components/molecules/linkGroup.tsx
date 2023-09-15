import ExternalLink from "../atoms/externalLink";

type LinkGrooupProps = {
  links: LinkProps[];
  className?: string;
};

const LinkGroup = ({ links, className }: LinkGrooupProps) => {
  return (
    <ul className={` w-fit ${className}`}>
      {links.map((link) => (
        <li className="-mb-1">
          <ExternalLink {...link} />
        </li>
      ))}
    </ul>
  );
};

export default LinkGroup;
