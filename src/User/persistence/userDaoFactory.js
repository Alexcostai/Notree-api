import createUserDao from "./userDao.js";
import { firebaseDb } from "../../shared/Firebase/firebase.js";

function createUserDaoFactory() {
  const userDao = createUserDao(firebaseDb);
  return userDao;
}

export default createUserDaoFactory;
