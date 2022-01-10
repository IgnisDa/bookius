import {
  ErrorComponentPage,
  getErrorLayout,
} from '../components/pages/ErrorContainer';
import Image500 from '../public/images/500-image.png';

const ServerErrorPage = () => {
  return (
    <ErrorComponentPage
      errorCode={500}
      mainText="You just broke something..."
      linkText="Take me back, it wasn't me, I swear!"
      image={Image500}
    />
  );
};

ServerErrorPage.getLayout = getErrorLayout;

export default ServerErrorPage;
