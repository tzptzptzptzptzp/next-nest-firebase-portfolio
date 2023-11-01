import { Body, Controller, Post } from "@nestjs/common";

import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ---------- USER ---------- //
  @Post("/create")
  async createUser(@Body("uid") uid: string, @Body("email") email: string) {
    return this.usersService.createUserData(uid, email);
  }
}
