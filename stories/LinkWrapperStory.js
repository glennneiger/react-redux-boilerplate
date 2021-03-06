import React from 'react';
import { storiesOf } from '@storybook/react';

import { LinkWrapper } from '../src/components';

export default storiesOf('LinkWrapper', module)
    .add('with anchor child', () => <LinkWrapper><a href="/">Click here</a></LinkWrapper>);
