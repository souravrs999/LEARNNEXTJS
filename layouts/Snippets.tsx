import Container from '@/components/Container';
import SnippetHero from '@/components/SnippetHero';

function SnippetLayout({ children, matter }) {
  return (
    <Container>
      <section className="flex max-w-4xl pt-12 mx-auto">
        <SnippetHero {...matter} />
      </section>
      <section className="flex max-w-4xl mx-auto">
        <article className="w-full px-5 prose">{children}</article>
      </section>
    </Container>
  );
}

export default SnippetLayout;
