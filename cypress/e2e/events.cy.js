describe("Smoke tests: Культурні заходи МФК СумДУ", () => {

    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("відображає заголовок та список майбутніх подій", () => {
      cy.contains("Культурні заходи МФК СумДУ");
      cy.get("ul li").should("have.length.greaterThan", 0);
      cy.contains("Концерт").should("exist");
      cy.contains("Лекція").should("exist");
    });
  
    it("не показує події з минулого", () => {
      cy.contains("Виставка").should("not.exist"); // подія з 2023 року
    });
  
  });
  