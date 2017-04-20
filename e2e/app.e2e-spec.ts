import { Sda.Aasi.AppPage } from './app.po';

describe('sda.aasi.app App', () => {
  let page: Sda.Aasi.AppPage;

  beforeEach(() => {
    page = new Sda.Aasi.AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
