import Link from 'next/link';
import Image from 'next/image';
import BlogImg from './BlogImg';
import QuotedText from './QuotedText';
import CodeBlock from './CodeBlock';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

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
  BlogImg,
  a: CustomLink,
  QuotedText,
  CodeBlock
};

export default MDXComponent;