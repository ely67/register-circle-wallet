import { generateEntitySecret } from "@circle-fin/developer-controlled-wallets";

const secret = generateEntitySecret();

console.log(secret);