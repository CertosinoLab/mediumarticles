import { newSpecPage } from '@stencil/core/testing';
import { DivInterno } from '../div-interno';

describe('div-interno', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DivInterno],
      html: `<div-interno></div-interno>`,
    });
    expect(page.root).toEqualHtml(`
      <div-interno>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </div-interno>
    `);
  });
});
