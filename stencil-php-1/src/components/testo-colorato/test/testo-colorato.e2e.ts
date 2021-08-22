import { newE2EPage } from '@stencil/core/testing';

describe('testo-colorato', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<testo-colorato></testo-colorato>');

    const element = await page.find('testo-colorato');
    expect(element).toHaveClass('hydrated');
  });
});
