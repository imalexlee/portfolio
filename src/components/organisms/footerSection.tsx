import { footerLinks } from "../../data/links";
import LinkGroup from "../molecules/linkGroup";

const FooterSection = () => {
  return (
    <footer
      className="w-full h-fit bg-background-dark p-8
    "
    >
      <LinkGroup links={footerLinks} className="self-end" />
    </footer>
  );
};

export default FooterSection;
