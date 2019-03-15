const scenario = () => {
  cy.visit("http://localhost:3000");
};

describe("My First Test", function() {
  it("Visits local project and change language", function() {
    scenario();
    cy.contains("English").click();
  });

  it("Visits local project and go to users page", function() {
    scenario();

    cy.contains("Users").click();

    cy.url().should("include", "/users");
  });

  it("Visits local project and go to hello page", function() {
    scenario();

    cy.contains("Hello").click();

    cy.url().should("include", "/hello");

    cy.contains("English").click();

    cy.contains("Welcome to React");

    cy.contains("Español").click();

    cy.contains("Bienvenido a React!");
  });

  it("Visits local project and go to users page and return at home", function() {
    scenario();

    cy.contains("Users").click();
    cy.contains("Home").click();

    cy.url().should("include", "/");
  });

  it("Visits not exists page and load error page", function() {
    cy.visit("http://localhost:3000/notexistsss");

    cy.contains("404");
  });
});
