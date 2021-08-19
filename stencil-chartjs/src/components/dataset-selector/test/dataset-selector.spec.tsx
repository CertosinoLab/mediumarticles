import { newSpecPage } from '@stencil/core/testing';
import { DatasetSelector } from '../dataset-selector';

describe('dataset-selector', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DatasetSelector],
      html: `<dataset-selector></dataset-selector>`,
    });
    expect(page.root).toEqualHtml(`
      <dataset-selector>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dataset-selector>
    `);
  });
});
