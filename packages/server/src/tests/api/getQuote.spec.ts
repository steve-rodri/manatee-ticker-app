import request from "supertest"

import { app } from "../createApp"

const quoteMock = {
  result: {
    data: {
      c: 0,
      h: 0,
      l: 0,
      o: 0,
      pc: 0,
      t: 0,
    },
  },
}

describe("GET /api/quote", () => {
  test("GET can fetch a quote correctly", async () => {
    const getQuoteResponse = await request(app)
      .get(`/api/quote?input=${JSON.stringify({ symbol: "APPL" })}`)
      .set("Accept", "application/json")
      .expect(200)
      .expect("Content-Type", /json/)

    expect(getQuoteResponse.body).toMatchObject(quoteMock)
  })

  test("An Invalid Request returns 400", async () => {
    await request(app)
      .get(`/api/quote?input=${JSON.stringify({ symbol: "3234" })}`)
      .set("Accept", "application/json")
      .expect(400)
      .expect("Content-Type", /json/)
  })
})
