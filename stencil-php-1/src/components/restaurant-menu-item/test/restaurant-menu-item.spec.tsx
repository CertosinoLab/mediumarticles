import { newSpecPage } from '@stencil/core/testing';
import { RestaurantMenuItem } from '../restaurant-menu-item';

describe('restaurant-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RestaurantMenuItem],
      html: `<restaurant-menu-item></restaurant-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <restaurant-menu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </restaurant-menu-item>
    `);
  });
});
