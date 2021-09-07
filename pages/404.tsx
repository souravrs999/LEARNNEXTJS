import Container from "@/components/Container";
import Link from "next/link";

export default function ResourceNotFoundError() {
  return (
    <Container>
      <div className="mx-auto max-w-4xl flex flex-col px-5 items-center py-24 space-y-10">
        <h5 className="text-10xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-hero-pattern">
            404
          </span>
        </h5>
        <p className="text-2xl max-w-md text-black dark:text-gray-200 text-center pt-5">
          Oops look&apos;s like the page you&apos;re looking for is not here.
        </p>
        <Link href="/">
          <a className="bg-yellow-500 px-8 py-3 rounded-lg text-lg font-bold text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
