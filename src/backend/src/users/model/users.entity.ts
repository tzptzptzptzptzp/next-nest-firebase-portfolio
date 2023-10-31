import { IsEmail, IsIn, IsString, Length } from "class-validator";

export type User = {
  email: string;
  userName: string;
  userImage: string;
  role: "admin" | "guest";
};

export class UsersEntity {
  constructor({ email, userName, userImage, role }: User) {
    this.email = email;
    this.userName = userName;
    this.userImage = userImage;
    this.role = role;
  }

  @IsString()
  @IsEmail()
  email: string;

  @Length(1, 20)
  userName: string;

  @IsString()
  userImage: string;

  @IsString()
  @IsIn(["admin", "guest"])
  role: "admin" | "guest";
}
