import createMailer from "./mailer.js";
import { getMailerInfo } from "../config.js";

const { service, user, pass } = getMailerInfo();

async function createMailerFactory() {
  const mailer = await createMailer(service, user, pass);
  return mailer;
}

export default createMailerFactory;
