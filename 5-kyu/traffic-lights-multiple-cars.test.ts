import { assertIsDefined } from '../@@utils/assertions';
import { trafficLights } from './traffic-lights-multiple-cars';

test('should output simulated steps', () => {
  const result = [
    'CCC.G...R...',
    '.CCCG...R...',
    '..CCC...R...',
    '..CCGC..R...',
    '...CC.C.R...',
    '...COC.CG...',
    '...CR.C.C...',
    '...CR..CGC..',
    '...CR...C.C.',
    '...CR...GC.C',
    '...CR...O.C.',
    '....C...R..C',
    '....GC..R...',
    '....G.C.R...',
    '....G..CR...',
    '....G..CR...',
    '....O...C...'
  ];

  const row = result[0];
  assertIsDefined(row);

  expect(trafficLights(row, 16)).toEqual(result);
});
