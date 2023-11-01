import { Injectable } from "@nestjs/common";
import { FirebaseService } from "src/firebase/firebase.service";
import { UsersEntity } from "./model/users.entity";

@Injectable()
export class UsersService {
  constructor(private readonly firebaseService: FirebaseService) {}

  /**
   * ユーザーデータ作成関数
   * @param uid
   * @param email
   */
  async createUserData(uid: string, email: string): Promise<string> {
    const userRef = await this.firebaseService.getCollectionRef("users");
    const accountData = new UsersEntity({
      email: email,
      userName: "",
      userImage: "",
      role: "guest",
    });

    try {
      await this.firebaseService.upsertDoc(userRef, uid, accountData);
    } catch (error) {
      console.error(error);
      throw new Error("Firebaseへのデータの登録・更新に失敗しました。");
    }
    return "Firebaseへのデータの登録・更新に成功しました。";
  }
}
