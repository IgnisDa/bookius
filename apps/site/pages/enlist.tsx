import {
  CheckUserByIssuerQuery,
  CheckUserByIssuerQueryVariables,
  useCreateUserMutation,
  useLoginUserMutation,
} from '@bookius/generated';
import { Flex, FlexGrow, Heading, styled, Text, theme as t } from '@bookius/ui';
import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { Magic } from 'magic-sdk';
import Router from 'next/router';
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { toast } from 'react-toastify';
import DictionaryDefinition from '../components/miscellaneous/DictionaryDefinition';
import { CHECK_USER_BY_ISSUER } from '../graphql/queries';
import { AUTH_TOKEN_KEY } from '../lib/constants';
import { client } from '../lib/helpers/urqlClient';

const Label = styled('label', {
  fontSize: 15,
  color: t.colors.accentPurple,
  width: 90,
  textAlign: 'right',
});

export const EnlistPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const [, executeLoginUserMutation] = useLoginUserMutation();
  const [, executeCreateUserMutation] = useCreateUserMutation();

  const onSubmit = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const magic = new Magic(
        process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string
      );
      const DIDToken = await magic.auth.loginWithMagicLink({ email: email });
      const issuer = (await magic.user.getMetadata()).issuer as string;
      const { data: checkUserByIssuerData } = await client
        .query<CheckUserByIssuerQuery, CheckUserByIssuerQueryVariables>(
          CHECK_USER_BY_ISSUER,
          { issuer: issuer }
        )
        .toPromise();
      if (!checkUserByIssuerData?.checkUserByIssuer) {
        // the user does not exist, we have to create it first
        const { data } = await executeCreateUserMutation({ issuer });
        if (data?.createUser.__typename === 'UserDto') {
          toast.success('Your account was created successfully!', {});
        }
      }
      // login the user
      const { data } = await executeLoginUserMutation({ issuer });
      if (data?.loginUser.__typename === 'LoginError')
        toast.error(data.loginUser.message, { delay: 3000 });
      else {
        toast.success('You were logged in successfully!', {});
      }
      Cookies.set(AUTH_TOKEN_KEY, DIDToken as string, {
        expires: 7,
        secure: true,
      });
      setIsLoading(false);
      setEmail('');
      Router.push('/dashboard');
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setIsLoading(false);
    }
  };

  return (
    <Flex
      direction={{ '@initial': 'column', '@lg': 'row' }}
      justify={'around'}
      align={'center'}
      className="m-auto h-full w-full lg:w-4/5 xl:w-[70%] 2xl:w-[65%] space-y-20 lg:space-y-0"
    >
      <FlexGrow align={'end'}>
        <DictionaryDefinition
          word="enlist"
          // cSpell:disable-next-line
          pronunciation="/ɪnˈlɪst,ɛnˈlɪst/"
          type="verb"
          meaning="enrol or be enrolled in the armed services."
          example="He enlisted in the Royal Naval Air Service."
        />
      </FlexGrow>
      <div className="hidden lg:block">
        <Separator.Root
          orientation={'vertical'}
          className="h-[300px] w-2 rounded-full bg-gray-300"
        />
      </div>
      <div className="block lg:hidden">
        <Separator.Root
          orientation={'horizontal'}
          className="w-[300px] h-2 rounded-full bg-gray-300"
        />
      </div>
      <FlexGrow justify={'end'} className="mx-14">
        <Flex
          as="form"
          onSubmit={onSubmit}
          direction={'column'}
          className="items-center space-y-4 form-control lg:text-right lg:items-end"
        >
          <h1 className="text-xl font-bold lg:text-2xl font-heading">
            We need your email to{' '}
            <span className="underline text-secondary">enlist</span> you into
            our cult
          </h1>
          <Label htmlFor="email" hidden>
            Email
          </Label>
          <motion.div
            className="relative w-full lg:w-10/12"
            initial={!isLoading ? 'loading' : 'initial'}
            animate={isLoading ? 'loading' : 'initial'}
          >
            <motion.input
              className="w-full input-bordered input"
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
            <Text className="text-sm leading-1 lg:pl-4 lg:text-base">
              Already a part of our cult? We still need it (in case you get any
              funny ideas) and we have to hunt you down.
            </Text>
          </div>
        </Flex>
      </FlexGrow>
    </Flex>
  );
};

EnlistPage.getLayout = (page: ReactElement) => {
  return (
    <Flex
      as="main"
      isCentered
      css={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'rgb(249, 251, 255)',
      }}
      className="dark:bg-base-300"
    >
      {page}
    </Flex>
  );
};

export default EnlistPage;
