import { CalcService } from "./calc.service"

describe("CalcService", () => {
  it("Should multiply two numbers", () => {
    const calc = new CalcService()
    const result = calc.multiply(3, 5)
    expect(result).toBe(15)
  })
})