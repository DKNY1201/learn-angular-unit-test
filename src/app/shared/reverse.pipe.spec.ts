/* tslint:disable:no-unused-variable */

import {ReversePipe} from "./reverse.pipe";
describe('Pipe: ReversePipe', () => {
  it('should reverse the input', () => {
    let reservePipe = new ReversePipe();
    expect(reservePipe.transform('hello')).toEqual('olleh');
  })
});
