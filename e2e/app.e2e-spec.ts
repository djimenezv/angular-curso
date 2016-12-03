import { AngularFridayPage } from './app.po';

describe('angular-friday App', function() {
  let page: AngularFridayPage;

  beforeEach(() => {
    page = new AngularFridayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
