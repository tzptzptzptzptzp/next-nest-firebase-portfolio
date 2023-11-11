import { Injectable } from "@nestjs/common";
import { data } from "../../../frontend/src/mock/data";

@Injectable()
export class MockService {
  getMockData() {
    return data;
  }
}
