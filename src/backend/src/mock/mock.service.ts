import { Injectable } from "@nestjs/common";
import { mockData } from "./data/mockData";

@Injectable()
export class MockService {
  getMockData() {
    return mockData;
  }
}
