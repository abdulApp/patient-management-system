import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const endpoint = 'https://cloud.appwrite.io/v1'

const client = new sdk.Client();

client
  .setEndpoint(endpoint!)
  .setProject("66b7639c000ff0f0afc9")
  .setKey(
    "d6aac49cc1fec438836aabb9741428739617a6ce6f2f475a894df83bc64b7a6ea5ffbaeb20b64a53456225a08d0c6a4d4c24e2f4d65e8276d5e4c7d86453ce0f8b0723bc297a40c7b8cd0bf7a3ca959d7148d0b567e1d6cebb48e50c18d87b5346d21094d272cabea4aa8e019be2fae63d9d6cc217727d1924daaa94eed0e67f"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
// export const functions = new sdk.Functions(client);
