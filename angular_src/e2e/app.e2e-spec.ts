import { CmsNewsPage } from './app.po';

describe('cms-news App', () => {
  let page: CmsNewsPage;

  beforeEach(() => {
    page = new CmsNewsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
