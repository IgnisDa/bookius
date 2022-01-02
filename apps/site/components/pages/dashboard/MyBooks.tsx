import { GetUserRelatedBooksQuery } from '@bookius/generated';
import {
  Box,
  css,
  FlexGrow,
  Flex,
  Heading,
  Text,
  Icon,
  styled,
  theme as t,
  clampNumberOfLines,
} from '@bookius/ui';
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

const TitleText = styled(Text, {
  textTransform: 'capitalize',
  fontWeight: 500,
  fontSize: t.fontSizes.xl,
});

const NameText = styled(Text, {
  color: t.colors.gray12,
  fontSize: t.fontSizes.base,
});

const iconCss = css({ color: 'white' });

export const MyBooksComponent: FunctionComponent<MyBooksComponentProps> = ({
  books,
}) => {
  return (
    <Box>
      <Flex justify={'between'} align={'center'}>
        <Heading>My Books</Heading>
        <MoreButton href="/books" />
      </Flex>
      <BooksContainer direction={{ '@initial': 'column', '@lg': 'row' }}>
        {zip(books?.userRelatedBooks.slice(0, 3), [
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
              <TitleText className={clampNumberOfLines(2)}>
                {book?.title!}
              </TitleText>
              <NameText>
                {book?.architects?.at(0)?.author.name || 'Author Name'}
              </NameText>
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
    </Box>
  );
};
