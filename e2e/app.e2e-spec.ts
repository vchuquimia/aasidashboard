import { AasiPage } from './app.po';

describe('sda.aasi.app App', () => {
  let page: AasiPage;

  beforeEach(() => {
    page = new AasiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
 