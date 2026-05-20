import { registerEntitySecretCiphertext } from "@circle-fin/developer-controlled-wallets";
import dotenv from "dotenv";

dotenv.config();
console.log("API_KEY:", process.env.CIRCLE_API_KEY);
console.log("ENTITY_SECRET:", process.env.CIRCLE_ENTITY_SECRET);

const response = await registerEntitySecretCiphertext({
  apiKey: process.env.CIRCLE_API_KEY ?? "",
  entitySecret: process.env.CIRCLE_ENTITY_SECRET ?? "",
  recoveryFileDownloadPath: "./recovery",
});

console.log(response.data?.recoveryFile);