import { newE2EPage } from '@stencil/core/testing';

describe('dataset-selector', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dataset-selector></dataset-selector>');

    const element = await page.find('dataset-selector');
    expect(element).toHaveClass('hydrated');
  });
});
