import { TestBed } from "@angular/core/testing"
import { SharedService } from "../shared.service"
import { CalcService } from "./calc.service"

describe("CalcService", () => {

  let shared: SharedService
  let calc: CalcService

  beforeEach(() => {
    console.log("Before each called");
    // shared = new SharedService // here we have manually created instances without dependancy injection
    // calc = new CalcService(shared) // to awoid that we can use anguar testbed utility

    // testbed is used to provide dependancies to services by using dependancy injection without calling constructors
    // TestBed.configureTestingModule({
    //   providers: [CalcService, SharedService]
    // })
    // shared = TestBed.inject(SharedService)
    // calc = TestBed.inject(CalcService)

    // If we want to do spyOn() we can do as below
    shared = jasmine.createSpyObj("SharedService", ["sharedFunction"]) // Instead of create new object here we created Mock Service
    TestBed.configureTestingModule({
      providers: [CalcService, {
        provide: SharedService, useValue: shared
      }]
    })
    shared = TestBed.inject(SharedService)
    calc = TestBed.inject(CalcService)

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

  it("Should call SharedService()", () => {
    const result = calc.multiply(3, 5)
    expect(shared.sharedFunction).toHaveBeenCalled()
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