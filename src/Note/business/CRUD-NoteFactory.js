import createNoteDaoFactory from '../persistence/noteDaoFactory.js';
import createErrorFactory from '../../shared/errors/ErrorFactory.js';

const noteDao = createNoteDaoFactory();
const errorFactory = createErrorFactory();

function createCRUDNoteFactory() {
    const CRUDUser = createCRUDUser(noteDao, errorFactory);
    return CRUDUser;
}

export default createCRUDNoteFactory;
