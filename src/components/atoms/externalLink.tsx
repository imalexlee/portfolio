const ExternalLink = ({ href, title, target = "_blank" }: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      className=" group w-fit text-xs hover:opacity-50 cursor-pointer"
    >
      {title}
    </a>
  );
};

export default ExternalLink;
