import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { USERS } from '../../mock-data/users';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController)
  });

  it("Should get all users", () => {
    service.getUsers().subscribe((users: any) => {
      expect(users).toBeTruthy()
      expect(users.length).toBe(4)
      const secondUser = users.find((user: any) => user.id === 2)
      expect(secondUser.name).toBe('Kamal')
    })
    const mockReq = testingController.expectOne('api/users')
    expect(mockReq.request.method).toEqual('GET')
    mockReq.flush(Object.values(USERS))
  })

  it("Should get user by id", () => {
    service.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy()
      expect(user.name).toBe('Supun')
    })
    const mockReq = testingController.expectOne('api/users/1')
    expect(mockReq.request.method).toEqual('GET')
    mockReq.flush(USERS[1])
  })

  it("Should update user by id", () => {
    let changes = { age: 24 }
    service.updateUser(1, changes).subscribe((user: any) => {
      expect(user).toBeTruthy()
      expect(user.id).toBe(1)
    })
    const mockReq = testingController.expectOne('api/users/1')
    expect(mockReq.request.method).toEqual('PUT')
    let modifiedUser = USERS[1]
    modifiedUser.age = 24
    expect(mockReq.request.body.age).toEqual(changes.age)
    mockReq.flush(modifiedUser)
  })

  afterEach(() => {
    testingController.verify() // to verify this http service is invoced and not any other
  })
});
