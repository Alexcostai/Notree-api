import createUserDaoFactory from '../persistence/userDaoFactory.js';
import createErrorFactory from '../../shared/errors/ErrorFactory.js';
import createMailerFactory from '../../Shared/mailer/MailerFactory.js';
import createEmailTextDao from '../../Shared/mailer/persistence/emailTextDao.js';

const mailer = createMailerFactory();
const userDao = createUserDaoFactory();
const errorFactory = createErrorFactory();
const emailTextDao = createEmailTextDao();

function createCRUDUserFactory() {
    const CRUDUser = createCRUDUser(userDao, errorFactory, mailer, emailTextDao);
    return CRUDUser;
}

export default createCRUDUserFactory;
