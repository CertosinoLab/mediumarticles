import { newSpecPage } from '@stencil/core/testing';
import { TestoColorato } from '../testo-colorato';

describe('testo-colorato', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestoColorato],
      html: `<testo-colorato></testo-colorato>`,
    });
    expect(page.root).toEqualHtml(`
      <testo-colorato>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </testo-colorato>
    `);
  });
});
