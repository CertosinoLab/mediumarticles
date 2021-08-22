import { newE2EPage } from '@stencil/core/testing';

describe('restaurant-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<restaurant-menu-item></restaurant-menu-item>');

    const element = await page.find('restaurant-menu-item');
    expect(element).toHaveClass('hydrated');
  });
});
