import createNoteDao from "./noteDao.js";
import { firebaseDb } from "../../shared/Firebase/firebase.js";

function createNoteDaoFactory() {
  const noteDao = createNoteDao(firebaseDb);
  return noteDao;
}

export default createNoteDaoFactory;
