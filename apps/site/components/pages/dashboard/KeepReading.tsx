import { GetUserBooksProgressLogsQuery } from '@bookius/generated';
import {
  Box,
  clampNumberOfLines,
  Flex,
  FlexGrow,
  Heading,
  styled,
  Text,
  theme as t,
} from '@bookius/ui';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { FunctionComponent } from 'react';
import { MoreButton } from '../../miscellaneous/MoreButton';
import { ReadingProgress } from './ReadingProgress';

interface PopularAuthorsComponentProps {
  logs: GetUserBooksProgressLogsQuery;
}

const ContainerBox = styled(Box, {
  background: 'White',
  shadow: 'md',
  borderRadius: t.space[5],
  paddingY: t.space[3],
  '@lg': { width: '60%' },
});

const PaddedBox = styled(Flex, {
  paddingX: t.space[6],
  paddingY: t.space[2],
});

const Avatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 50,
  height: 65,
  borderRadius: '20%',
  borderWidth: 3,
  borderColor: 'WhiteSmoke',
  backgroundColor: 'Black',
  marginRight: t.space[4],
  flex: 'none',
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
});

const BookName = styled(Text, {
  fontSize: t.fontSizes.lg,
});
const AuthorName = styled(Text, {
  fontSize: t.fontSizes.sm,
  color: t.colors.gray10,
});

const ProgressRoot = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: t.colors.gray8,
  borderRadius: '99999px',
  width: '100%',
  height: 5,
});

const ProgressIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: t.colors.accentPurple,
  height: '100%',
  transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
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

export const KeepReadingComponent: FunctionComponent<
  PopularAuthorsComponentProps
> = ({ logs }) => {
  return (
    <ContainerBox>
      <PaddedBox
        justify={'between'}
        align={'center'}
        css={{ paddingY: t.space[5] }}
      >
        <Heading>Keep Reading</Heading>
        <MoreButton href="/shelves/reading" />
      </PaddedBox>
      {logs.userBookProgressLogs.length > 0 ? (
        <Flex direction={'column'}>
          {logs.userBookProgressLogs.map((log, index) => (
            <Box key={log.id}>
              <PaddedBox align={'center'}>
                <Avatar>
                  <AuthorAvatarImage
                    src={`https://picsum.photos/seed/${log.id + 1}/200/300`}
                  />
                  <AuthorAvatarFallback delayMs={600}>
                    {log.book.title}
                  </AuthorAvatarFallback>
                </Avatar>
                <FlexGrow direction={'column'} css={{ spaceY: t.space[2] }}>
                  <Flex>
                    <Box css={{ spaceY: t.space[2], marginRight: t.space[2] }}>
                      <BookName className={clampNumberOfLines(1)}>
                        {log.book.title}
                      </BookName>
                      <AuthorName>
                        {log?.book?.architects?.at(0)?.author.name || 'Unknown'}
                      </AuthorName>
                    </Box>
                    <Box css={{ marginLeft: 'auto' }}>
                      {Math.round((log.percentage * log.numPages) / 100)}/
                      {log.numPages}
                    </Box>
                  </Flex>
                  <ReadingProgress index={index} progress={log.percentage} />
                </FlexGrow>
              </PaddedBox>
            </Box>
          ))}
        </Flex>
      ) : (
        <FlexGrow
          css={{ paddingX: t.space[5], spaceY: t.space[5] }}
          direction={'column'}
        >
          <NoDataAvatar>
            <NoDataAuthorAvatarImage src={`/images/no-data.svg`} />
          </NoDataAvatar>
          <Text css={{ textAlign: 'center' }}>
            You have not started logging your progress. Add a book to the
            `Currently Reading` shelf to add books here.
          </Text>
        </FlexGrow>
      )}
    </ContainerBox>
  );
};
