import { newE2EPage } from '@stencil/core/testing';

describe('chart-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<chart-container></chart-container>');

    const element = await page.find('chart-container');
    expect(element).toHaveClass('hydrated');
  });
});
