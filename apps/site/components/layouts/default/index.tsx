import { Flex, FlexGrow, styled, theme as t } from '@bookius/ui';
import { ReactElement } from 'react';
import { Sidebar } from './elements/Sidebar';

const MainContainer = styled(FlexGrow, {
  '@lg': {
    padding: t.space[4],
    paddingLeft: 0,
    marginLeft: t.space[32],
  },
});

export const defaultLayout = (page: ReactElement) => {
  return (
    <Flex>
      <Sidebar />
      <FlexGrow
        direction={'column'}
        css={{
          minHeight: '100vh',
          backgroundColor: t.colors.creamWhite,
          padding: t.space[3],
          paddingBottom: t.space[24],
          '@lg': {
            padding: 0,
          },
        }}
      >
        <MainContainer as={'main'}>{page}</MainContainer>
      </FlexGrow>
    </Flex>
  );
};
