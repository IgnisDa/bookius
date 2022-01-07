import { GetUserRelatedAuthorsQuery } from '@bookius/generated';
import {
  Box,
  Flex,
  FlexGrow,
  Heading,
  Icon,
  styled,
  Text,
  theme as t,
} from '@bookius/ui';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as Separator from '@radix-ui/react-separator';
import { FunctionComponent } from 'react';
import { VscNotebook } from 'react-icons/vsc';
import { MoreButton } from '../../miscellaneous/MoreButton';

type YourAuthorsComponentProps = {
  authors: GetUserRelatedAuthorsQuery;
};

const ContainerBox = styled(Box, {
  background: 'White',
  shadow: 'md',
  borderRadius: t.space[5],
  paddingY: t.space[3],
  '@lg': { width: '40%' },
});

const StyledSeparator = styled(Separator.Root, {
  backgroundColor: t.colors.gray8,
  '&[data-orientation=horizontal]': { height: '0.5px', width: '100%' },
});

const PaddedBox = styled(Flex, {
  paddingX: t.space[6],
  paddingY: t.space[4],
});

const Avatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '20%',
  borderWidth: 3,
  borderColor: 'WhiteSmoke',
  backgroundColor: 'Black',
  marginRight: t.space[4],
});

const AuthorAvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const AuthorAvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'black',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

const AuthorName = styled(Box, {
  fontSize: t.fontSizes.base,
});

const AuthorIcon = styled(VscNotebook, {
  marginLeft: t.space.auto,
  marginRight: t.space[2],
  color: t.colors.accentPurple,
  size: t.space[6],
  strokeWidth: 0.3,
});

const NoDataAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '100%',
  height: '100%',
  borderWidth: 3,
  marginRight: t.space[4],
  flex: 'none',
});

const NoDataAuthorAvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const YourAuthorsComponent: FunctionComponent<
  YourAuthorsComponentProps
> = ({ authors }) => {
  return (
    <ContainerBox>
      <PaddedBox justify={'between'} align={'center'}>
        <Heading>Your Authors</Heading>
        <MoreButton href="/authors" />
      </PaddedBox>
      {authors.userRelatedAuthors.length > 0 ? (
        <Box>
          {authors.userRelatedAuthors.map((author) => (
            <Box key={author.id}>
              <StyledSeparator />
              <PaddedBox align={'center'}>
                <Avatar>
                  <AuthorAvatarImage
                    src={`https://picsum.photos/seed/${author.id}/200/300`}
                  />
                  <AuthorAvatarFallback delayMs={600}>
                    {author.name
                      .split(' ')
                      .map((tk) => tk[0])
                      .join('')}
                  </AuthorAvatarFallback>
                </Avatar>
                <AuthorName>
                  <Text className="text-lg">{author.name}</Text>
                </AuthorName>
                <Icon label={`Icon for ${author.name}`}>
                  <AuthorIcon />
                </Icon>
              </PaddedBox>
            </Box>
          ))}
        </Box>
      ) : (
        <FlexGrow
          css={{ paddingX: t.space[5], spaceY: t.space[5] }}
          direction={'column'}
        >
          <NoDataAvatar>
            <NoDataAuthorAvatarImage src={`/images/no-data.svg`} />
          </NoDataAvatar>
          <Text className="text-center">
            You have not looked up any authors yet.
          </Text>
        </FlexGrow>
      )}
    </ContainerBox>
  );
};
