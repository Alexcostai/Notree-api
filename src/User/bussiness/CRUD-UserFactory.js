import createCRUDUser from './CRUD-User.js';
import createUserDaoFactory from '../persistence/userDaoFactory.js';
import createErrorFactory from '../../shared/errors/ErrorFactory.js';
import createMailerFactory from '../../shared/mailer/MailerFactory.js';
import createEmailTextDao from '../../shared/mailer/persistence/emailTextDao.js';

const mailer = await createMailerFactory();
const userDao = createUserDaoFactory();
const errorFactory = createErrorFactory();
const emailTextDao = createEmailTextDao();

function createCRUDUserFactory() {
    const CRUDUser = createCRUDUser(userDao, errorFactory, mailer, emailTextDao);
    return CRUDUser;
}

export default createCRUDUserFactory;
