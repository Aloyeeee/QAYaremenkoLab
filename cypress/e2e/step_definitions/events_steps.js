import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Я відкрив веб-додаток", () => {
  cy.visit("http://localhost:3000");
});

When("Сторінка завантажена", () => {
  cy.get("h1").contains("Культурні заходи МФК СумДУ");
});

When("Я обираю фільтр {string}", (filter) => {
  cy.get("select#eventFilter").select(filter);
});

When("Я натискаю на подію {string}", (title) => {
  cy.contains(title).click();
});

Then("Я бачу подію {string}", (title) => {
  cy.contains(title).should("be.visible");
});

Then("Я не бачу подію {string}", (title) => {
  cy.contains(title).should("not.exist");
});

Then("Я бачу деталі події з датою {string}", (date) => {
  cy.get(".event-date").should("contain.text", date);
});

Then("Тип події {string}", (type) => {
  cy.get(".event-type").should("contain.text", type);
});

Then("Вартість {string}", (price) => {
  cy.get(".event-price").should("contain.text", price);
});
