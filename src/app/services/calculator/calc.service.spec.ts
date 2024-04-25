import { SharedService } from "../shared.service"
import { CalcService } from "./calc.service"

describe("CalcService", () => {

  let shared : SharedService
  let calc: CalcService

  beforeEach(()=>{
    console.log("Before each called");
    shared = new SharedService
    calc = new CalcService(shared)
  })

  it("Should multiply two numbers", () => {
    // const shared = new SharedService
    // const calc = new CalcService(shared)
    const result = calc.multiply(3, 5)
    expect(result).toBe(15)
  })

  it("Should add two numbers", () => {
    // const shared = new SharedService
    // const calc = new CalcService(shared)
    const result = calc.add(3, 5)
    expect(result).toBe(8)
  })



  // If we want to test multiply and add functions we have to write two tests cases
  // But i here we have repeated codes
  // To avoid from releated codes we can use before each as above
  // it("Should multiply two numbers", () => {
  //   const shared = new SharedService
  //   const calc = new CalcService(shared)
  //   const result = calc.multiply(3, 5)
  //   expect(result).toBe(15)
  // })

  // it("Should add two numbers", () => {
  //   const shared = new SharedService
  //   const calc = new CalcService(shared)
  //   const result = calc.add(3, 5)
  //   expect(result).toBe(8)
  // })
})

// Additional Note: =====

// xdescribe // disable test suite
// xit // disable test spec

// fdescribe // run perticuler test suite only
// fit // run perticular test spec only