import React from 'react';
import { describe, expect, it } from '@jest/globals';
import renderer from 'react-test-renderer';

import {BeeAnimationPositioner} from './BeeAnimationPositioner';

jest.useFakeTimers();

describe('BeeAnimationPositioner', () => {

    it('Check if it renders correctly', () => {
        const tree = renderer.create(<BeeAnimationPositioner  nextPosition={{ x: 0, y: 0 }} children={undefined} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});