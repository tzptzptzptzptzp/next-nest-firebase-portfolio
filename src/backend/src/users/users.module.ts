import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { FirebaseModule } from "src/firebase/firebase.module";

@Module({
  controllers: [UsersController],
  imports: [FirebaseModule],
  providers: [UsersService],
})
export class UsersModule {}
