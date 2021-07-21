import { createUser } from '../models/User.js';
import { createEmail } from '../models/Email.js';

export default function createCRUDUser(userDao, errorFactory, mailer, emailTextDao) {
    return {
        registerUser: async (userData) => {
            const user = createUser(userData);
            const userId = await userDao.add(user);
            if (!userId) {
                throw errorFactory.duplicateUserError("The user has been registered");
            }
            const email = await emailTextDao.getByCode("REGISTER_USER");
            mailer.send(email, user.email);
            return userId;
        },
        loginUser: async ({ email, password }) => {
            const newEmail = createEmail(email);
            const user = await userDao.getByEmail(newEmail);
            if (!user || user.password !== password) {
                throw errorFactory.invalidDataError("Invalid email or password");
            }
            return user.id;
        },
        recoverPassword: async (id) => {
            const user = await userDao.getById(id);
            if (!user) {
                throw errorFactory.userNotFoundError("User not found");
            }
            const email = await emailTextDao.getByCode("RECOVER_PASSWORD");
            mailer.send(email, user.email);
        },
        resetPassword: async (password, id) => {
            const user = await userDao.getById(id);
            if (!user) {
                throw errorFactory.userNotFoundError("User not found");
            }
            user.password = password;
            const res = await userDao.update(user);
            if(!res){
                throw errorFactory.userNotFoundError("User not found");
            }
        },
        changePassword: async ({ oldPassword, newPassword }, id) => {
            const user = await userDao.getById(id);
            if (!user) {
                throw errorFactory.userNotFoundError("User not found");
            }
            if(user.password!==oldPassword){
                throw errorFactory.invalidDataError("Invalid password")
            }
            user.password = newPassword;
            const res = await userDao.update(user);
            if(!res){
                throw errorFactory.userNotFoundError("User not found");
            }
        },
    }
}