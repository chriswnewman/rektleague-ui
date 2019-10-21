import { TeamAbbreviationPipe } from './team-abbreviation.pipe';

describe('TeamAbbreviationPipe', () => {
  it('create an instance', () => {
    const pipe = new TeamAbbreviationPipe();
    expect(pipe).toBeTruthy();
  });
});
