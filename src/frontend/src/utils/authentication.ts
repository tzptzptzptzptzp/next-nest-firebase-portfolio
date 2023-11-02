import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import { API_URL } from "@/data/apiUrl";

export const userSignUp = async (
  email: string,
  password: string,
  setError: React.Dispatch<React.SetStateAction<string | null | undefined>>
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const apiUrl = `http://localhost:8080${API_URL.createUser}`;
    const postData = {
      uid: user.uid,
      email,
    };
    await axios.post(apiUrl, postData);
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      "message" in error
    ) {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/email-already-in-use":
          setError("既に登録されているメールアドレスです");
          break;
        case "auth/invalid-email":
          setError("メールアドレスの形式が正しくありません");
          break;
        default:
          setError("不明なエラーが発生しました");
          break;
      }
      console.log(errorCode, error.message);
    }
  }
};
