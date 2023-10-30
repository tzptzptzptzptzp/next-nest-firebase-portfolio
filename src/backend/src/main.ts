import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import { FirebaseService } from "./firebase/firebase.service";
import { UsersService } from "./users/users.service";

import { auth } from "firebase-admin";
import * as functions from "firebase-functions";
import UserRecord = auth.UserRecord;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();

// FIREBASE FUNCTIONS
export const eventCreateUser = functions
  .region("asia-northeast1")
  .auth.user()
  .onCreate(async (originalUser: UserRecord): Promise<void> => {
    const user = {
      ...originalUser,
      email: originalUser.email || "",
    };
    const firebaseService = new FirebaseService();
    const usersService = new UsersService(firebaseService);
    if (user.email === undefined) user.email = "";
    await usersService.createUserData(user.uid, user.email);
  });
