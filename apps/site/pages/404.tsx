import Head from 'next/head';
import {
  ErrorComponentPage,
  getErrorLayout,
} from '../components/pages/ErrorContainer';
import Image404 from '../public/images/404-image.png';

const NotFoundErrorPage = () => {
  return (
    <>
      <Head>
        <title>Not found</title>
      </Head>
      <ErrorComponentPage
        errorCode={404}
        mainText="You should not be here"
        linkText="Take me back while I still can"
        image={Image404}
      />
    </>
  );
};

NotFoundErrorPage.getLayout = getErrorLayout;

export default NotFoundErrorPage;
