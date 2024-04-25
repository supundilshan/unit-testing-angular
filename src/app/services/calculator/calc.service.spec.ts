import { SharedService } from "../shared.service"
import { CalcService } from "./calc.service"

describe("CalcService", () => {
  it("Should multiply two numbers", () => {
    const shared = new SharedService
    const calc = new CalcService(shared)
    const result = calc.multiply(3, 5)
    expect(result).toBe(15)
  })

  // In above CalcService() function we have called another function
  // So we have to ensure that was called.
  // To test that we can use Spy()

  it("Should called sharedFunction()", () => {
    const shared = new SharedService
    spyOn(shared, "sharedFunction") // Only test function is called
    // spyOn(shared,"sharedFunction").and.callThrough() // test the function is exicuted and exicute the function
    const calc = new CalcService(shared)
    const result = calc.multiply(3, 5)
    expect(shared.sharedFunction).toHaveBeenCalled()
  })

  it("Test Without calling constructor", () => {
    const shared = jasmine.createSpyObj("SharedService", ["sharedFunction"]) // Instead of create new object here we created Mock Service
    // spyOn(shared, "sharedFunction") // Here we don't need spyOn()
    const calc = new CalcService(shared)
    const result = calc.multiply(3, 5)
    expect(shared.sharedFunction).toHaveBeenCalled()
  })
})