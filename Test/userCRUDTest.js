import createCRUDUserFactory from "../src/User/bussiness/CRUD-UserFactory.js";
import createUserDaoFactory from "../src/User/persistence/userDaoFactory.js";

// const userDao = createUserDaoFactory();
const userCRUD = createCRUDUserFactory();

async function testRegister(){
    console.log("=================Test Register=================");
    const user = {
        email: "alexunio@hotmail.com",
        name: "Alex",
        lastName: "Costa",
        password: "123123"
    }
    const res = await userCRUD.registerUser(user);
    console.log(res);
}

async function testLogin(){
    console.log("=================Test Login=================");
    const user = {
        email:"alexunio@hotmail.com",
        password:"123123"
    }
    const res = await userCRUD.loginUser(user);
    console.log(res);
}

async function testRecoverPassword(){
    console.log("=================Recover Password=================");
    const userID = "0ZcyKdOeIu7JEPTT3qCf";
    await userCRUD.recoverPassword(userID);
}

async function testResetPassword(){
    console.log("=================Reset Password=================");
    const newPassword = "asdasd";
    const userID = "0ZcyKdOeIu7JEPTT3qCf";
    await userCRUD.resetPassword(newPassword, userID);
}

async function testChangePassword(){
    console.log("=================Change Password=================");
    const newPassword = {
        oldPassword: "123123",
        newPassword: "asdasd",
    }
    const userID = "0ZcyKdOeIu7JEPTT3qCf";
    await userCRUD.changePassword(newPassword, userID);
}


testRegister();
// testLogin();
// testRecoverPassword();
// testResetPassword();
// testChangePassword();