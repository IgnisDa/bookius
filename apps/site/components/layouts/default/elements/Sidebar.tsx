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
  Flex,
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
import Cookies from 'js-cookie';
import { Magic } from 'magic-sdk';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiBookmark, FiHeart, FiHome, FiLogIn } from 'react-icons/fi';
import {
  HiOutlineCalendar,
  HiOutlineCollection,
  HiOutlineMail,
} from 'react-icons/hi';
import { ChakraNextImage } from '../../../../components/miscellaneous/ChakraImage';
import { CHECK_USER_BY_ISSUER } from '../../../../graphql/queries';
import { AUTH_TOKEN_KEY } from '../../../../lib/constants';
import { client } from '../../../../lib/helpers/urqlClient';
import logo from '../../../../public/logo.png';

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
      Cookies.set(AUTH_TOKEN_KEY, DIDToken, { expires: 7, secure: true });
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
      <ModalContent mx={3}>
        <ModalCloseButton isDisabled={isLoading} />
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
            <FormLabel htmlFor="email" hidden>
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

const LINKS = [
  { name: 'Home', href: '/', icon: FiHome },
  { name: 'Favorite', href: '/favorites', icon: FiHeart },
  { name: 'Shelves', href: '/shelves', icon: HiOutlineCollection },
  { name: 'Bookmarks', href: '/bookmarks', icon: FiBookmark },
  { name: 'Calendar', href: '/calendar', icon: HiOutlineCalendar },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      <LoginDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <Flex
        w={20}
        as="aside"
        direction="column"
        position="fixed"
        align="center"
        top={0}
        left={0}
        bottom={0}
        justifyContent="space-between"
        py={10}
        bgColor="brand.accent.purple"
        my={2}
        borderRightRadius={20}
      >
        <NextLink href="/" passHref>
          <a>
            <Box
              w={16}
              h={16}
              _hover={{ transform: 'scale(1.05)' }}
              transitionProperty="transform"
              transitionDuration="0.2s"
            >
              <ChakraNextImage src={logo} alt="Logo Image" />
            </Box>
          </a>
        </NextLink>
        <VStack spacing={3}>
          {LINKS.map((link, index) => (
            <NextLink href={link.href} passHref={true} key={index}>
              <Button
                py={7}
                as="a"
                variant={router.pathname !== link.href ? 'ghost' : 'solid'}
                color={router.pathname !== link.href ? 'white' : 'black'}
                _hover={{
                  bgColor:
                    router.pathname === link.href
                      ? 'gray.100'
                      : 'brand.accent.purple',
                }}
              >
                <Icon
                  as={link.icon}
                  boxSize={7}
                  _hover={{ transform: 'scale(1.2)' }}
                  transitionProperty="transform"
                  transitionDuration="0.2s"
                />
              </Button>
            </NextLink>
          ))}
        </VStack>
        <Box>
          <Button onClick={() => setIsOpen(true)} py={7} variant="ghost">
            <Icon as={FiLogIn} boxSize={8} />
          </Button>
        </Box>
      </Flex>
    </>
  );
};
