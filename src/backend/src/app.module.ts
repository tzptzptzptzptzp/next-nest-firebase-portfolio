import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FirebaseModule } from "./firebase/firebase.module";
import { UsersModule } from './users/users.module';
import { MockModule } from './mock/mock.module';

@Module({
  imports: [ConfigModule.forRoot(), FirebaseModule, UsersModule, MockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
