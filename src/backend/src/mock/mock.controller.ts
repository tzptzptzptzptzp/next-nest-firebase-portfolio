import { Controller, Get } from "@nestjs/common";
import { MockService } from "./mock.service";

@Controller("mock")
export class MockController {
  constructor(private mockService: MockService) {}

  @Get()
  getMockData() {
    return this.mockService.getMockData();
  }
}
