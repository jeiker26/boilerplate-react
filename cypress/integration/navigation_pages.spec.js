import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see "{idLink}" header link and navigate to "{pageRoute}" page`, (idLink, pageRoute) => {
  cy.get(`[data-cy=${idLink}]`).click();

  cy.url().should("include", pageRoute);
});

const url = "https://google.com";
Given("I open main page project", () => {
  cy.visit(url);
});
