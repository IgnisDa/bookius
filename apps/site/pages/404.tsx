import {
  ErrorComponentPage,
  getErrorLayout,
} from '../components/pages/ErrorContainer';
import Image404 from '../public/images/404-image.png';

const ServerErrorPage = () => {
  return (
    <ErrorComponentPage
      errorCode={404}
      mainText="You should not be here"
      linkText="Take me back while I still can"
      image={Image404}
    />
  );
};

ServerErrorPage.getLayout = getErrorLayout;

export default ServerErrorPage;
