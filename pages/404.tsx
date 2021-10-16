import Container from '@/components/Container';
import Link from 'next/link';

export default function ResourceNotFoundError() {
  return (
    <Container>
      <div className="flex flex-col items-center px-5 py-24 mx-auto space-y-10 max-w-4xl">
        <h5 className="font-extrabold text-10xl text-navy-green">404</h5>
        <p className="pt-5 max-w-md text-2xl text-center text-slate">
          Oops look&apos;s like the page you&apos;re looking for is not here.
        </p>
        <Link href="/">
          <a className="px-8 py-3 text-lg font-bold rounded-lg text-slate-light bg-navy-lighter hover:bg-navy-green hover:text-navy-lighter">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
