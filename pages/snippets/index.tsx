import SnippetCard from '@/components/SnippetCard';
import DefaultLayout from '@/layouts/Default';
import { getAllFilesFrontMatter } from '@/lib/mdx';

function Snippets({ snippets }) {
  const meta = {
    title: "A collection of code snippet's for LEARNNEXT",
    description:
      "For those who don't want to bother reading through the whole blog posts you can easily copy these code snippets to your projects."
  };

  return (
    <DefaultLayout meta={{ ...meta }}>
      <section className="flex py-12 mx-auto max-w-6xl">
        <div className="flex flex-col mx-5 space-y-5 w-full">
          <div className="flex flex-col py-5 space-y-3">
            <h2 className="flex items-center space-x-2">
              <span className="font-mono text-base text-navy-green">01.</span>
              <span className="text-3xl font-black text-slate-light">
                Snippets
              </span>
              <span className="w-20 h-[1px] bg-navy-green"></span>
            </h2>
            <p className="max-w-xl text-slate">
              For those who don&apos;t want to bother reading through the whole
              blog posts you can easily copy these code snippets to your
              projects.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3">
            {snippets.map((item, _idx) => (
              <SnippetCard {...snippets[_idx]} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('snippets');
  return { props: { snippets } };
}

export default Snippets;
