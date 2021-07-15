import dotenv from "dotenv";
dotenv.config();

const getMailerInfo = () => {
  return {
    service: process.env.SERVICE,
    user: process.env.USER,
    pass: process.env.PASS,
  };
};

const getFirebaseConfig = () => {
  return {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };
};

export {
  getFirebaseConfig,
  getMailerInfo
};
