import { newSpecPage } from '@stencil/core/testing';
import { ChartContainer } from '../chart-container';

describe('chart-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChartContainer],
      html: `<chart-container></chart-container>`,
    });
    expect(page.root).toEqualHtml(`
      <chart-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </chart-container>
    `);
  });
});
