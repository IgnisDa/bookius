import { sleep } from '@bookius/general/frontend';
import {
  CheckUserByIssuerQuery,
  CheckUserByIssuerQueryVariables,
  useCreateUserMutation,
  useLoginUserMutation,
} from '@bookius/generated';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useToast,
  VStack,
} from '@chakra-ui/react';
import Cookie from 'js-cookie';
import { Magic } from 'magic-sdk';
import NextLink from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiHome, FiLogIn } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { CHECK_USER_BY_ISSUER } from '../../../../graphql/queries';
import { AUTH_TOKEN_KEY } from '../../../../lib/constants';
import { client } from '../../../../lib/helpers/urqlClient';

interface LoginDialogProps {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
}

const LoginDialog = ({ isOpen, setIsOpen }: LoginDialogProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const [, executeLoginUserMutation] = useLoginUserMutation();
  const [, executeCreateUserMutation] = useCreateUserMutation();

  const onSubmit = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
      const DIDToken = await magic.auth.loginWithMagicLink({ email: email });
      const issuer = (await magic.user.getMetadata()).issuer;
      const { data: checkUserByIssuerData } = await client
        .query<CheckUserByIssuerQuery, CheckUserByIssuerQueryVariables>(
          CHECK_USER_BY_ISSUER,
          { issuer: issuer }
        )
        .toPromise();
      if (!checkUserByIssuerData.checkUserByIssuer) {
        // the user does not exist, we have to create it first
        const { data } = await executeCreateUserMutation({ issuer });
        if (data.createUser.__typename === 'UserDto') {
          toast({
            description: 'Your account was created successfully!',
            duration: 3000,
            status: 'info',
          });
        }
      }
      // login the user
      const { data } = await executeLoginUserMutation({ issuer });
      if (data.loginUser.__typename === 'LoginError')
        toast({
          description: data.loginUser.message,
          duration: 3000,
          status: 'error',
        });
      else {
        toast({
          description: 'You were logged in successfully!',
          duration: 3000,
          status: 'success',
        });
      }
      Cookie.set(AUTH_TOKEN_KEY, DIDToken);
      setIsLoading(false);

      await sleep(1000);
      setIsOpen(false);
      setEmail('');
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      closeOnOverlayClick={!isLoading}
      onClose={() => setIsOpen(false)}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box
          onSubmit={onSubmit}
          as="form"
          maxW="md"
          w="full"
          overflow="hidden"
          p={6}
          verticalAlign="middle"
          display="inline-block"
          rounded={8}
          textAlign="left"
        >
          <Box>
            <Heading size="md" textAlign="left">
              Get Started
            </Heading>
          </Box>
          <FormControl mt={4} isRequired>
            <FormLabel htmlFor="id" hidden>
              Email
            </FormLabel>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={HiOutlineMail} boxSize={6} />
              </InputLeftAddon>
              <Input
                id="email"
                value={email}
                onChange={handleChange}
                isDisabled={isLoading}
                variant="outline"
                placeholder="Email"
                type="email"
              />
            </InputGroup>
            <FormHelperText>We will never share your email.</FormHelperText>
          </FormControl>
          <Box mt={4}>
            <Button
              colorScheme="green"
              type="submit"
              isLoading={isLoading}
              loadingText="Submitting"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LoginDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <VStack
        as="aside"
        alignItems="center"
        justifyContent="center"
        ml={5}
        direction="column"
        spacing={6}
      >
        <NextLink href="/" passHref={true}>
          <Button py={7} as="a">
            <Icon as={FiHome} boxSize={8} />
          </Button>
        </NextLink>
        <Button onClick={() => setIsOpen(true)} py={7}>
          <Icon as={FiLogIn} boxSize={8} />
        </Button>
      </VStack>
    </>
  );
};
