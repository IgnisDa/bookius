import { GetUserRelatedBooksQuery } from '@bookius/generated';
import {
  Box,
  clampNumberOfLines,
  css,
  Flex,
  FlexGrow,
  Heading,
  Icon,
  styled,
  Text,
  theme as t,
} from '@bookius/ui';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import clsx from 'clsx';
import { zip } from 'lodash';
import { FunctionComponent } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { MoreButton } from '../../miscellaneous/MoreButton';

interface MyBooksComponentProps {
  books: GetUserRelatedBooksQuery;
}

const BooksContainer = styled(Flex, {
  marginTop: t.space[4],
  spaceY: t.space[6],
  '@lg': { spaceX: t.space[5], spaceY: t.space[0] },
});

const BookContainer = styled(FlexGrow, {
  shadow: 'sm',
  alignItems: 'center',
  justifyItems: 'center',
  paddingY: t.space[5],
  paddingX: t.space[4],
  spaceX: t.space[5],
  borderRadius: t.space[3],
  variants: {
    color: {
      lightBlue: { backgroundColor: t.colors.accentLightBlue },
      purple: { backgroundColor: t.colors.accentPurple },
      limeGreen: { backgroundColor: t.colors.accentLimeGreen },
    },
  },
});

const BookImage = styled('img', {
  width: t.space[24],
  height: t.space[40],
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: t.space[3],
});

const iconCss = css({ color: 'white' });

const NoDataAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '100%',
  height: '100%',
  flex: 'none',
});

const NoDataAuthorAvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
});

export const MyBooksComponent: FunctionComponent<MyBooksComponentProps> = ({
  books,
}) => {
  return (
    <Box>
      <Flex justify={'between'} align={'center'}>
        <Heading>My Books</Heading>
        <MoreButton href="/books" />
      </Flex>
      {books.userRelatedBooks.length > 0 ? (
        <BooksContainer direction={{ '@initial': 'column', '@lg': 'row' }}>
          {zip(books.userRelatedBooks.slice(0, 3), [
            'lightBlue',
            'purple',
            'limeGreen',
          ]).map(([book, color]) => (
            <BookContainer key={book?.id} color={color as any}>
              <BookImage src={`https://picsum.photos/seed/${book?.id}/200`} />
              <Flex
                direction={'column'}
                justify={'around'}
                css={{ marginY: t.space[4] }}
              >
                <Heading
                  className={clsx(
                    clampNumberOfLines(2).className,
                    'font-sans text-lg text-gray-900'
                  )}
                >
                  {book?.title!}
                </Heading>
                <Text className="text-gray-800">
                  {book?.architects?.at(0)?.author.name || 'Author Name'}
                </Text>
                <Flex css={{ spaceX: t.space[1] }}>
                  {[...Array(5)].map((_, index) => (
                    <Icon label={index < 4 ? 'filled' : 'unfilled'} key={index}>
                      {index < 4 ? (
                        <FaStar className={iconCss()} />
                      ) : (
                        <FaRegStar className={iconCss()} />
                      )}
                    </Icon>
                  ))}
                </Flex>
              </Flex>
            </BookContainer>
          ))}
        </BooksContainer>
      ) : (
        <Flex direction={'column'} className="px-5 space-y-5">
          <NoDataAvatar className="h-60">
            <NoDataAuthorAvatarImage
              src={`/images/no-data.svg`}
              className="object-contain"
            />
          </NoDataAvatar>
          <Text className="text-center">
            You have not started reading any books yet.
          </Text>
        </Flex>
      )}
    </Box>
  );
};
