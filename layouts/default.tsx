import dynamic from 'next/dynamic';

import Container from '@/components/Container';

const CallToAction = dynamic(() => import('@/components/CallToAction'), {
  ssr: false
});

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      {children}
      <CallToAction />
    </Container>
  );
};

export default DefaultLayout;
