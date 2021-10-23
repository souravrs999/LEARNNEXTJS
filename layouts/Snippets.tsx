import Container from '@/components/Container';
import SnippetHero from '@/components/SnippetHero';

interface SnippetType {
  children: any;
  matter?: {
    slug?: string;
    title?: string;
    image?: string;
    summary?: string;
    publishedAt?: string;
  };
}

function SnippetLayout({ children, matter }: SnippetType) {
  return (
    <Container
      title={`${matter.title} - LEARNNEXT`}
      description={matter.summary}
      date={new Date(matter.publishedAt).toISOString()}
    >
      <section className="flex pt-12 mx-auto max-w-4xl">
        <SnippetHero {...matter} />
      </section>
      <section className="flex mx-auto max-w-4xl">
        <article className="px-5 w-full prose">{children}</article>
      </section>
    </Container>
  );
}

export default SnippetLayout;
