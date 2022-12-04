describe("Stock Ticker", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
  })
})

beforeEach(() => {
  cy.visit("http://localhost:5173")

  // home page fixture
  cy.intercept("http://localhost:4000/api/quote", {
    fixture: "quote.json",
  })
})

describe("When a user enters a symbol", () => {
  describe("and submits the form", () => {
    it("the quote is displayed", () => {
      cy.get("[data-testid=input]").clear().type("TSLA")
      cy.get("[data-testid=form]").submit()
      cy.get("[data-testid=quote]").should("be.visible")
    })
  })
})
