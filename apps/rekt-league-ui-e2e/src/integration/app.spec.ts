import { getGreeting } from '../support/app.po';

describe('rekt-league-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to rekt-league-ui!');
  });
});
