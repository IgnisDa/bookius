import { GetUserRelatedAuthorsQuery } from '@bookius/generated';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface PopularAuthorsComponentProps {
  authors: GetUserRelatedAuthorsQuery;
}

export const PopularAuthorsComponent: FunctionComponent<
  PopularAuthorsComponentProps
> = ({ authors }) => {
  return (
    <Box>
      <Heading size="lg" color="gray.700">
        Popular Authors
      </Heading>
      <HStack>
        {authors.userRelatedAuthors.map((author) => (
          <Box>{JSON.stringify(author)}</Box>
        ))}
      </HStack>
    </Box>
  );
};
