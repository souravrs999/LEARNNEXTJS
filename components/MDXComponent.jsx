import Link from "next/link";
import Image from "next/image";
import ConsCard from "./ConsCard";
import ProsCard from "./ProsCard";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponent = {
  Image,
  a: CustomLink,
  ConsCard,
  ProsCard,
};

export default MDXComponent;
