import dynamic from 'next/dynamic';

import Container from '@/components/Container';

const CallToAction = dynamic(() => import('@/components/CallToAction'), {
  ssr: false
});

interface DefaultType {
  children: any;
  meta?: {
    slug?: string;
    title?: string;
    image?: string;
    summary?: string;
    publishedAt?: string;
  };
}

const DefaultLayout = ({ children, meta }: DefaultType) => {
  return (
    <Container {...meta}>
      {children}
      <CallToAction />
    </Container>
  );
};

export default DefaultLayout;
