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
    <div className="flex flex-col-reverse lg:flex-row items-center m-auto space-y-reverse h-full w-full lg:w-4/5 xl:w-[70%] 2xl:w-[65%] space-y-32 lg:space-y-0">
      <div className="flex items-start justify-end flex-1 lg:pr-8 xl:pr-10">
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
          className="w-[300px] h-2 rounded-full  bg-warning"
        />
      </div>
      <div className="flex items-end justify-end flex-1 mx-8">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center space-y-4 form-control lg:text-right lg:items-end"
        >
          <h1 className="text-2xl font-bold text-gray-800 md:text-xl xl:text-2xl font-heading dark:text-gray-300">
            We need your email to{' '}
            <span className="underline text-secondary">enlist</span> you into
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
              className="w-full input-bordered input input-ghost"
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
                  'absolute top-0 right-0 rounded-l-none btn btn-primary',
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
            <p className="text-xs text-gray-800 md:text-sm leading-1 lg:pl-4 lg:text-base dark:text-gray-400">
              Already a part of our cult? We still need it in case you get any
              funny ideas and we have to hunt you down.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

EnlistPage.getLayout = (page: ReactElement) => (
  <main className="w-full h-screen bg-slate-100 dark:bg-base-300">{page}</main>
);

export default EnlistPage;
