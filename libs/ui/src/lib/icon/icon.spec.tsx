import { render } from '@testing-library/react';

import { Icon } from './icon';

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon label="Hello" />);
    expect(baseElement).toBeTruthy();
  });
});
