const scenario = () => {
  cy.visit("http://localhost:3000");
};

describe("My First Test", function() {
  it("Visits local project and change language", function() {
    scenario();
    cy.get("[data-cy=header-change-language-en]").click();
  });

  it("Visits local project and go to users page", function() {
    scenario();

    cy.get("[data-cy=header-link-users]").click();

    cy.url().should("include", "/users");
  });

  it("Visits local project and go to hello page", function() {
    scenario();

    cy.get("[data-cy=header-link-hello]").click();

    cy.url().should("include", "/hello");

    cy.get("[data-cy=header-change-language-en]").click();

    cy.contains("Welcome to React");

    cy.get("[data-cy=header-change-language-es]").click();

    cy.contains("Bienvenido a React!");
  });

  it("Visits local project and go to users page and return at home", function() {
    scenario();

    cy.get("[data-cy=header-link-users]").click();
    cy.get("[data-cy=header-link-home]").click();

    cy.url().should("include", "/");
  });

  it("Visits not exists page and load error page", function() {
    cy.visit("http://localhost:3000/notexistsss");

    cy.contains("404");
  });
});
