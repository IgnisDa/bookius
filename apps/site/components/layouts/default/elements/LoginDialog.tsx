import { sleep } from '@bookius/general/frontend';
import {
  CheckUserByIssuerQuery,
  CheckUserByIssuerQueryVariables,
  useCreateUserMutation,
  useLoginUserMutation,
} from '@bookius/generated';
import {
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  keyframes,
  styled,
  Text,
  theme as t,
} from '@bookius/ui';
import { blackA, mauve, violet } from '@radix-ui/colors';
import {
  DialogContent as Content,
  DialogDescription as Description,
  DialogOverlay as Overlay,
  DialogPortal as Portal,
  DialogTitle as Title,
  Root as DialogRoot,
} from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { CHECK_USER_BY_ISSUER } from 'apps/site/graphql/queries';
import { AUTH_TOKEN_KEY } from 'apps/site/lib/constants';
import { client } from 'apps/site/lib/helpers/urqlClient';
import Cookies from 'js-cookie';
import { Magic } from 'magic-sdk';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { toast } from 'react-toastify';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const DialogOverlay = styled(Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const DialogContent = styled(Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '400px',
  padding: t.space[4],
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});

const Container: FC<{}> = ({ children, ...props }) => {
  return (
    <Portal>
      <DialogOverlay />
      <DialogContent {...props}>{children}</DialogContent>
    </Portal>
  );
};

const DialogTitle = styled(Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

const DialogDescription = styled(Description, {
  marginY: t.space[5],
  color: t.colors.gray10,
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: t.space[4],
  alignItems: 'center',
});

const Label = styled('label', {
  fontSize: 15,
  color: violet.violet11,
  width: 90,
  textAlign: 'right',
});

type LoginDialogProps = {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};

const MailIcon = styled(HiOutlineMail, { size: t.space[8] });

export const LoginDialog: FC<LoginDialogProps> = ({ isOpen, setIsOpen }) => {
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

      await sleep(1000);
      setIsOpen(false);
      setEmail('');
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setIsLoading(false);
    }
  };

  return (
    <DialogRoot open={isOpen}>
      <Container>
        <DialogTitle>
          <Heading css={{ fontSize: t.fontSizes['2xl'] }}>Get Started</Heading>
        </DialogTitle>
        <DialogDescription>
          <Text>You need to be logged in to start tracking your books.</Text>
        </DialogDescription>
        <Flex
          direction={'column'}
          onSubmit={onSubmit}
          as="form"
          css={{ spaceY: t.space[3] }}
        >
          <Label htmlFor="email" hidden>
            Email
          </Label>
          <Fieldset>
            <Icon label="Email ID">
              <MailIcon />
            </Icon>
            <Input
              id="email"
              value={email}
              onChange={handleChange}
              isDisabled={isLoading}
              placeholder="Email"
              type="email"
              required
            />
          </Fieldset>
          <Button
            aria-label="Close"
            variant="green"
            isLoading={isLoading}
            css={{ fontFamily: t.fonts.sans }}
          >
            Submit
          </Button>
        </Flex>
        <IconButton onClick={() => setIsOpen(false)}>
          <Cross2Icon />
        </IconButton>
      </Container>
    </DialogRoot>
  );
};
