import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Embed Content Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Embed Content Block: Add and save', () => {
    const titleSelector = '.block.inner.title [contenteditable="true"]';
    cy.get(titleSelector).clear();
    cy.get(titleSelector).type('Embed Content Test');

    cy.get('.documentFirstHeading').contains('Embed Content Test');

    cy.get(titleSelector).type('{enter}');

    // Add embed content block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Data Visualizations').click();
    cy.get('.content.active.data_visualizations .button.embed_content')
      .click({ force: true });

    // Save
    cy.get('#toolbar-save').click({ force: true });
    cy.contains('Embed Content Test');
  });
});