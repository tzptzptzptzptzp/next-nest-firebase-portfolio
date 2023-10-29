import { IsIn, IsString, Length } from "class-validator";

export type User = {
  userName: string;
  userImage: string;
  role: "admin" | "guest";
};

export class UsersEntity {
  constructor({ userName, userImage, role }: User) {
    this.userName = userName;
    this.userImage = userImage;
    this.role = role;
  }

  @Length(1, 20)
  userName: string;

  @IsString()
  userImage: string;

  @IsString()
  @IsIn(["admin", "guest"])
  role: "admin" | "guest";
}
