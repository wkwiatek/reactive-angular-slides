import { ReactiveAngularPage } from './app.po';

describe('reactive-angular App', () => {
  let page: ReactiveAngularPage;

  beforeEach(() => {
    page = new ReactiveAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
