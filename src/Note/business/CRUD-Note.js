import { createNote } from '../models/Note.js';

export default function createCRUDNote(noteDao, errorFactory) {
    return {
        //pasar el id del usuario
        add: async (noteData) => {
            const note = createNote(noteData);
            await noteDao.add(note);
        },
        remove: async (noteId) => {
            await noteDao.removeById(noteId);
        },
        update: async (noteData) => {
            const note = createNote(noteData);
            await noteDao.updateById(note);
        },
        getAll: async (userId) => {
            return await noteDao.getAllByUser(userId);
        },
    }
}