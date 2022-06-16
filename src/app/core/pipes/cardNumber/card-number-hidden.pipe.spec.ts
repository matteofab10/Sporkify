import { CardNumberHiddenPipe } from './card-number-hidden.pipe';

describe('CardNumberHiddenPipe', () => {
  it('create an instance', () => {
    const pipe = new CardNumberHiddenPipe();
    expect(pipe).toBeTruthy();
  });
});
