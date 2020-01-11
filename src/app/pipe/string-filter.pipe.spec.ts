import { FilterPipe } from './string-filter.pipe';

describe('Pipe: FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('providing no value returns fallback', () => {
    expect(pipe.transform('searchQuery')).toBe('searchQuery');
  });
});
