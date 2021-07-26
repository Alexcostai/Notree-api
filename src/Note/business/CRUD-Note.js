import { createNote } from '../models/Note.js';

export default function createCRUDNote(noteDao, errorFactory) {
  return {
    add: async (noteData, userId) => {
      const note = createNote({ ...noteData, userId });
      await noteDao.add(note);
    },
    remove: async (noteId) => {
      await noteDao.removeById(noteId);
    },
    update: async (noteData, userId) => {
      const note = createNote({ ...noteData, userId });
      await noteDao.updateById(note);
    },
    getAll: async (userId) => {
      return await noteDao.getAllByUser(userId);
    },
  }
}