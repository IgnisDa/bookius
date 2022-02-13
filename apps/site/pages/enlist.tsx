import {
  CheckUserByIssuerQuery,
  CheckUserByIssuerQueryVariables,
  useCreateUserMutation,
  useLoginUserMutation,
} from '@bookius/generated';
import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { Magic } from 'magic-sdk';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { DictionaryDefinition } from '../components/miscellaneous/DictionaryDefinition';
import { CHECK_USER_BY_ISSUER } from '../graphql/queries';
import { AUTH_TOKEN_KEY } from '../lib/constants';
import { client } from '../lib/helpers/urqlClient';

export const EnlistPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const [, executeLoginUserMutation] = useLoginUserMutation();
  const [, executeCreateUserMutation] = useCreateUserMutation();

  const destination = router.query.from
    ? (router.query.from as string)
    : '/dashboard';

  useEffect(() => {
    router.query.errorMessage &&
      toast.warning(router.query.errorMessage, {
        delay: 100,
        toastId: 'errorMessage',
      });
  }, [router.query]);

  const onSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    setIsLoading(true);
    try {
      const magic = new Magic(
        process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string
      );
      const DIDToken = await magic.auth.loginWithMagicLink({ email: email });
      const issuer = (await magic.user.getMetadata()).issuer!;
      const { data: checkUserByIssuerData } = await client
        .query<CheckUserByIssuerQuery, CheckUserByIssuerQueryVariables>(
          CHECK_USER_BY_ISSUER,
          { issuer: issuer }
        )
        .toPromise();
      if (!checkUserByIssuerData?.checkUserByIssuer) {
        // the user does not exist, we have to create it first
        const { data } = await executeCreateUserMutation({ issuer });
        if (data?.createUser.__typename === 'UserDto')
          toast.info('We created a new account for you');
      }
      // the user exists now, login the user
      const { data } = await executeLoginUserMutation({ issuer });
      if (data?.loginUser.__typename === 'LoginError')
        toast.error(data.loginUser.message);
      else toast.success('You were logged in successfully!');
      Cookies.set(AUTH_TOKEN_KEY, DIDToken as string, {
        expires: 7,
        secure: true,
        sameSite: 'Lax',
      });
      setIsLoading(false);
      setEmail('');

      router.push(destination);
    } catch (error) {
      console.error(error);
      toast.error('An unexpected error happened occurred, please try again.');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Enlist</title>
      </Head>
      <div className="m-auto flex h-full w-full flex-col-reverse items-center space-y-32 space-y-reverse lg:w-4/5 lg:flex-row lg:space-y-0 xl:w-[70%] 2xl:w-[65%]">
        <div className="flex flex-1 items-start justify-end lg:pr-8 xl:pr-10">
          <DictionaryDefinition
            word="enlist"
            // cSpell:disable-next-line
            pronunciation="/ɪnˈlɪst,ɛnˈlɪst/"
            type="verb"
            meaning="enrol or be enrolled in the armed services."
            example="He enlisted in the Royal Naval Air Service."
          />
        </div>
        <div className="hidden lg:block">
          <Separator.Root
            orientation={'vertical'}
            className="h-[300px] w-2 rounded-full bg-warning"
          />
        </div>
        <div className="block lg:hidden">
          <Separator.Root
            orientation={'horizontal'}
            className="h-2 w-[300px] rounded-full  bg-warning"
          />
        </div>
        <div className="mx-8 flex flex-1 items-end justify-end">
          <form
            onSubmit={onSubmit}
            className="form-control flex flex-col items-center space-y-4 lg:items-end lg:text-right"
          >
            <h1 className="font-heading text-2xl font-bold md:text-xl xl:text-2xl">
              We need your email to{' '}
              <span className="text-secondary underline">enlist</span> you into
              our cult
            </h1>
            <label htmlFor="email" hidden>
              Email
            </label>
            <motion.div
              className="relative w-full lg:w-10/12"
              initial={!isLoading ? 'loading' : 'initial'}
              animate={isLoading ? 'loading' : 'initial'}
            >
              <motion.input
                className="input-bordered input-ghost input w-full text-primary-content"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                disabled={isLoading}
                type="email"
                required
              />
              <AnimatePresence>
                <motion.button
                  className={clsx(
                    'btn btn-primary absolute top-0 right-0 rounded-l-none',
                    isLoading && 'loading'
                  )}
                  aria-label="Close"
                  exit="loading"
                  disabled={isLoading}
                >
                  Recruit
                </motion.button>
              </AnimatePresence>
            </motion.div>
            <div>
              <p className="leading-1 text-xs md:text-sm lg:pl-4 lg:text-base">
                Already a part of our cult? We still need it in case you get any
                funny ideas and we have to hunt you down.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

EnlistPage.getLayout = (page: ReactElement) => (
  <main className="h-screen w-full bg-base-300">{page}</main>
);

export default EnlistPage;
