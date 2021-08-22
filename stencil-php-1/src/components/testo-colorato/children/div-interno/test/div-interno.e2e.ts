import { newE2EPage } from '@stencil/core/testing';

describe('div-interno', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<div-interno></div-interno>');

    const element = await page.find('div-interno');
    expect(element).toHaveClass('hydrated');
  });
});
