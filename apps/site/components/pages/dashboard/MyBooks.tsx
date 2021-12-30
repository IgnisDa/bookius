import { GetUserRelatedBooksQuery } from '@bookius/generated';
import { Heading } from '@bookius/ui';
import {
  Box,
  HStack,
  Icon,
  Image,
  LinkBox,
  Text,
  VStack,
} from '@chakra-ui/react';
import { zip } from 'lodash';
import NextLink from 'next/link';
import { FunctionComponent } from 'react';
import { FaArrowRight, FaRegStar, FaStar } from 'react-icons/fa';

interface MyBooksComponentProps {
  books: GetUserRelatedBooksQuery;
}

export const MyBooksComponent: FunctionComponent<MyBooksComponentProps> = ({
  books,
}) => {
  return (
    <Box>
      <HStack justify="space-between">
        <Heading>My Books</Heading>
        <NextLink href="/books" passHref>
          <HStack as="a" spacing={2} alignItems="center">
            <Text>More</Text>
            <Icon as={FaArrowRight} boxSize="3" />
          </HStack>
        </NextLink>
      </HStack>
      <HStack mt={4} spacing={6}>
        {zip(books?.userRelatedBooks.slice(0, 3), [
          'brand.accent.lightBlue',
          'brand.accent.purple',
          'brand.accent.limeGreen',
        ]).map(([book, color]) => (
          <LinkBox
            as={HStack}
            boxShadow="sm"
            key={book?.id}
            alignItems="center"
            justifyItems="center"
            bgColor={color}
            rounded={8}
            py={5}
            px={4}
            spacing={3}
            flexGrow={1}
            flexShrink={1}
            flexBasis={0}
          >
            <Image
              src={`https://picsum.photos/seed/${book?.id}/200`}
              w={24}
              h={40}
              objectFit="cover"
              rounded={8}
            />
            <LinkBox>
              <NextLink href={`/books/${book?.id}`} passHref>
                <VStack spacing={4} textAlign="left" alignItems="start">
                  <Text
                    noOfLines={1}
                    fontWeight={700}
                    fontSize="lg"
                    casing="capitalize"
                  >
                    {book?.title!}
                  </Text>
                  <Text color="gray.700" fontSize="sm">
                    {book?.architects[0]?.author.name || 'Author Name'}
                  </Text>
                  <HStack>
                    {[...Array(5)].map((_, index) => (
                      <Icon
                        as={index < 4 ? FaStar : FaRegStar}
                        key={index}
                        color="white"
                      />
                    ))}
                  </HStack>
                </VStack>
              </NextLink>
            </LinkBox>
          </LinkBox>
        ))}
      </HStack>
    </Box>
  );
};
