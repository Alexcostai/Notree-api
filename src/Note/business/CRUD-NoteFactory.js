import createNoteDaoFactory from '../persistence/noteDaoFactory.js';
import createErrorFactory from '../../shared/errors/ErrorFactory.js';
import createCRUDNote from './CRUD-Note.js';


const noteDao = createNoteDaoFactory();
const errorFactory = createErrorFactory();

function createCRUDNoteFactory() {
    const CRUDNote = createCRUDNote(noteDao, errorFactory);
    return CRUDNote;
}

export default createCRUDNoteFactory;
