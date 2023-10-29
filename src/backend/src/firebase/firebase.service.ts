import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { auth, storage } from "firebase-admin";
import { firestore } from "firebase-admin";

import * as admin from "firebase-admin";

export const API_VERSION = "v1";
export const envDoc = (): string => {
  if (process.env.NODE_ENV === "production") {
    return "production";
  } else {
    return "development";
  }
};

@Injectable()
export class FirebaseService {
  constructor(private configService: ConfigService) {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: this.configService.get("FIREBASE_PROJECT_ID"),
          clientEmail: this.configService.get("FIREBASE_CLIENT_EMAIL"),
          privateKey: this.configService
            .get("FIREBASE_PRIVATE_KEY")
            .replace(/\\n/g, "\n"),
        }),
        storageBucket: this.configService.get("FIREBASE_STORAGE_BUCKET"),
      });
      admin.firestore().settings({ ignoreUndefinedProperties: true });
    }
    this.auth = admin.auth();
  }

  private readonly auth: auth.Auth;

  private readonly firestore: firestore.Firestore;

  private readonly storage: storage.Storage;

  /**
   * admin auth 取得
   */
  getAuth(): auth.Auth {
    return this.auth;
  }

  /**
   * admin firestore 取得
   */
  getFirestore(): firestore.Firestore {
    return this.firestore;
  }

  /**
   * admin storage 取得
   */
  getStorage(): storage.Storage {
    return this.storage;
  }

  /**
   * FirestoreCollection 取得
   */
  getCollectionRef(
    collectionName: string
  ): firestore.CollectionReference<firestore.DocumentData> {
    return this.firestore
      .collection(API_VERSION)
      .doc(envDoc())
      .collection(collectionName);
  }
}
