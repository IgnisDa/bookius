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
import clsx from 'clsx';
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

const AuthorName = styled(Text, {
  fontSize: t.fontSizes.sm,
  color: t.colors.gray10,
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
                    <Box css={{ spaceY: t.space[2], marginRight: t.space[4] }}>
                      <Text
                        className={clsx(
                          clampNumberOfLines(1).className,
                          'text-lg'
                        )}
                      >
                        {log.book.title}
                      </Text>
                      <AuthorName>
                        {log?.book?.architects?.at(0)?.author.name || 'Unknown'}
                      </AuthorName>
                    </Box>
                    <Box css={{ marginLeft: 'auto' }}>
                      <Text className="text-sm">
                        {Math.round((log.percentage * log.numPages) / 100)}/
                        {log.numPages}
                      </Text>
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
          align={'center'}
        >
          <NoDataAvatar>
            <NoDataAuthorAvatarImage src={`/images/no-data.svg`} />
          </NoDataAvatar>
          <Text className="text-center">
            You have not started logging your progress. Add a book to the
            `Currently Reading` shelf to add books here.
          </Text>
        </FlexGrow>
      )}
    </ContainerBox>
  );
};
