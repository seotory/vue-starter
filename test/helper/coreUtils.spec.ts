import { expect } from 'chai';
import * as utils from '../../src/helper/coreUtils';

describe('utils.ts', () => {
    describe('yes()', () => {
        it('기본 체크.', () => {
            expect(utils.yes()).to.equal(true);
        });
    });
});
