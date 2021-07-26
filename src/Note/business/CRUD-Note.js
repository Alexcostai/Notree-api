import { createNote } from '../models/Note.js'

export default function createCRUDNote(noteDao, errorFactory) {
  return {
    add: async (noteData, userId) => {
      const note = createNote({ ...noteData, userId });
      const res = await noteDao.add(note);
      if (!res) {
        throw errorFactory.dataBaseError('Error to add the note in firebase');
      }
    },
    remove: async (noteId) => {
      const res = await noteDao.removeById(noteId);
      if (!res) {
        throw errorFactory.dataBaseError('Error to remove the note in firebase');
      }
    },
    update: async (noteData, userId) => {
      const note = createNote({ ...noteData, userId });
      const res = await noteDao.updateById(note);
      if (!res) {
        throw errorFactory.dataBaseError('Error to update the note in firebase');
      }
    },
    getAll: async (userId) => {
      const res = await noteDao.getAllByUser(userId);
      if (!res) {
        throw errorFactory.dataBaseError('Error to update the note in firebase');
      }
      return res;
    },
  }
}