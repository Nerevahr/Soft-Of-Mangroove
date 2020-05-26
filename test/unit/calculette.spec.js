import { describe, it } from 'mocha';
import { assert } from 'chai';

import { Calculette } from '../../src/calculette';

describe('Calculette', () => {

    const calculette = new Calculette();

    describe('additionne', () => {
        it('Return first argument plus second argument', () => 
            assert.equal(2, calculette.additionne(1,1))
        );
    });

});