import { Controller, Get, Post } from "@nestjs/common";

import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ---------- USER ---------- //
  @Post("/create")
  async createUser(uid: string, email: string) {
    return this.usersService.createUserData(uid, email);
  }
}
