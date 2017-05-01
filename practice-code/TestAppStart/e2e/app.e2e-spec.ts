import { TestAppStartPage } from './app.po';

describe('test-app-start App', () => {
  let page: TestAppStartPage;

  beforeEach(() => {
    page = new TestAppStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
