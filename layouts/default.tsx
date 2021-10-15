import CallToAction from '@/components/CallToAction';
import Container from '@/components/Container';

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      {children}
      <CallToAction />
    </Container>
  );
};

export default DefaultLayout;
